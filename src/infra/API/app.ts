import express from 'express';
import { mySqlConection } from '../../database/';
import 'dotenv/config';
import BaseRoutes from '../BaseRoutes/';
import cors from 'cors';
import HandleError from '../../middlewares/HandleError';

const app = express();

app.use(express.json());
app.use(cors());
app.use(BaseRoutes);
app.use(HandleError);

mySqlConection.hasConection();

export default app;
