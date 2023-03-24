import { Router } from 'express';
import loginController from './controller';
import loginValidation from '../../Validations/Login/userLogin'

const routes = Router();

routes.post('/login', loginValidation, loginController.login);

export default routes;