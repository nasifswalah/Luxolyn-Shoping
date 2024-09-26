import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});