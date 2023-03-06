import { NextFunction, Request, Response } from 'express';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import key from "../../infra/config/jwtKey"

export default class loginController {
  static login = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const { email, password } = req.body;

    const dataUser = await User.findOne({ where: { email } });

    if (!dataUser) {
      return res
        .status(401)
        .json('Invalid e-mail or password, please try again');
    }

    if (!bcrypt.compareSync(password, dataUser.password)) {
      return res
        .status(401)
        .json('Invalid e-mail or password, please try again');
    }

    try {
      const token = jwt.sign(
        {
          id_user: dataUser.id_user,
          name: dataUser.name,
          email: dataUser.email,
          scope: dataUser.isAdm,
        },
        key.privateKey,
        { expiresIn: '30 days' }
      );

      
      return res.status(200).json({ id: dataUser.id_user, token: token });
    } catch (error) {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };
}
