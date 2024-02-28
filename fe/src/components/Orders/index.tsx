import { useEffect, useState } from 'react';

import socketIo from 'socket.io-client';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { api } from '../../utils/api';

export function Orders() {
    const [order, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const socket = socketIo('http://localhost:3003', {
            transports: ['websocket'],
        });

        socket.on('orders@New', (order) => {
            setOrders(prevState => prevState.concat(order));
        })
    }, []);

    useEffect(() => {
        api.get('/orders').then(({ data }) => {
            setOrders(data)
        })
    }, []);

    const waiting = order.filter((item) => item.status === 'WAITING');
    const inProduction = order.filter((item) => item.status === 'IN_PRODUCTION');
    const done = order.filter((item) => item.status === 'DONE');

    function handleCancelOrder(orderId: string) {
        setOrders((prevState) => prevState.filter(order => order._id !== orderId));
    }

    function handleOrderStatusChange(orderId: string, status: Order['status']) {
        setOrders((prevState) => prevState.map((order) => (
            order._id === orderId
                ? { ...order, status }
                : order
        )));
    }

    return (
        <Container>
            <OrdersBoard
                icon='🕑'
                title='Fila de Espera'
                orders={waiting}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}
            />

            <OrdersBoard
                icon='🧑🏼‍🍳'
                title='Em preparação'
                orders={inProduction}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}

            />

            <OrdersBoard
                icon='✅'
                title='Pronto'
                orders={done}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleOrderStatusChange}

            />
        </Container>
    )
}
