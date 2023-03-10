import express from "express";
import { mySqlConection } from "../../database/";
import "dotenv/config";
import BaseRoutes from "../BaseRoutes/"

const app = express();

app.use(express.json());
app.use(BaseRoutes);

mySqlConection.hasConection();

export default app;