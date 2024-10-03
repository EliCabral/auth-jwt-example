import express from 'express';
import authRoutes from './auth';
import userRoutes from './user';
// import { initDatabase } from './database';

require('dotenv').config()

const app = express();
// const db = initDatabase();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});