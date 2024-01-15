import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
    try {
        const { table, products } = req.body;

        if (!table) {
            return res.sendStatus(400).json({
                error: 'Table is required',
            });
        }

        if (!products) {
            return res.sendStatus(400).json({
                error: 'Products is required',
            });
        }

        const order = await Order.create({ table, products });

        res.sendStatus(201).json(order);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
