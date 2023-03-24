import { Router } from 'express';
import checkoutController from '../../modules/Checkout/controller';
import checkoutValidation from "../../Validations/Checkout/create";

const router = Router();

router.post("/", checkoutValidation, checkoutController.create);

export default router;