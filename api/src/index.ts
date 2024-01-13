import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const port = 3003;

        app.listen(port, () => {
            console.log(`🔥 Server rodando em http://localhost:${port}`);
        });

        console.log('🍃 Conectado ao mongodb');
    })
    .catch(() => console.log('❌ Erro ao iniciar servidor e conectar no mongodb'));
