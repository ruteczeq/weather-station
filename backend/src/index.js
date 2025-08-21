import express from 'express';
import measurementsRouter from './routes/measurements.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.use(express.json());
app.use(measurementsRouter);

app.listen(PORT, () => {
  console.log(`Backend działa na porcie ${PORT}`);
});
