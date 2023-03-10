import { Router } from "express";
import userRoutes from "../../modules/User/routes";
import productRoutes from "../../modules/Product/routes";
import categoryRoutes from "../../modules/Category/routes";
import orderRoutes from "../../modules/Purchase/routes";

const routes = Router();

routes.use(userRoutes);
routes.use(productRoutes);
routes.use(categoryRoutes);
routes.use(orderRoutes);

export default routes;