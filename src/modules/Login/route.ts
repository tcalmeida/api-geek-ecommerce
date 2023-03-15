import { Router } from 'express';
import loginController from './controller';

const routes = Router();

routes.post('/login', loginController.login);

export default routes;