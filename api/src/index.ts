import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const port = 3003;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`🔥 Server rodando em http://localhost:${port}`);
        });

        console.log('🍃 Conectado ao mongodb');
    })
    .catch(() => console.log('❌ Erro ao iniciar servidor e conectar no mongodb'));
