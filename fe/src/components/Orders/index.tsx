import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
    {
        "_id": "65a345c11a30f84225b0b892",
        "table": "154",
        "status": "WAITING",
        "products": [
            {
                "product": {
                    "name": "Pizza quatro queijos",
                    "imagePath": "1705197253296-quatro-queijos.png",
                    "price": 40,
                },
                "quantity": 3,
                "_id": "65a345c11a30f84225b0b893"
            },
            {
                "product": {
                    "name": "Coca cola",
                    "imagePath": "1705197773101-coca-cola.png",
                    "price": 4,
                },
                "quantity": 2,
                "_id": "65a345c11a30f84225b0b894"
            }
        ],
    }
];

export function Orders() {
    return (
        <Container>
            <OrdersBoard
                icon='🕑'
                title='Fila de Espera'
                orders={orders}
            />

            <OrdersBoard
                icon='🧑🏼‍🍳'
                title='Em preparação'
                orders={orders}
            />

            <OrdersBoard
                icon='✅'
                title='Pronto'
                orders={orders}
            />
        </Container>
    )
}
