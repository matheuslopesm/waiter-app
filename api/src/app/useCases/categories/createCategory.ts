import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
    try {
        const { icon, name } = req.body;

        if (!name) {
            return res.sendStatus(400).json({
                error: 'Name is required',
            });
        }

        if (!icon) {
            return res.sendStatus(400).json({
                error: 'Name is required',
            });
        }

        const category = await Category.create({ icon, name });

        res.sendStatus(201).json(category);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
