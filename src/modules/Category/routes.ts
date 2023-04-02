import { Router } from "express";
import controller from "./controller";
import createValidation from "../../validations/Category/create";
import updateValidation from "../../validations/Category/update";
import userAuthentication from "../../middlewares/authentication";
import adminVerification from "../../middlewares/adminVerification";

const routes = Router();

routes.post("/category/admin", userAuthentication, createValidation, adminVerification, controller.create);
routes.get("/category/catalog", controller.findAll);
routes.get("/category/:id", controller.findOne);
routes.put("/category/admin/:id", userAuthentication, updateValidation, adminVerification, controller.update);
routes.delete("/category/admin/:id", userAuthentication, adminVerification, controller.delete);

export default routes;