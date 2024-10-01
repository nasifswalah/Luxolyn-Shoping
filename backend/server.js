import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import productRoute from './routes/product.route.js';
import cartRoute from './routes/cart.route.js';
// import paymentRoute from "./routes/payment.routes.js";

import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
// app.use('/api/payments', paymentRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    connectDB();
});