import { Request, Response } from 'express';
import { Purchase, User } from '../../models';
import MESSAGE from '../../constants/messages';
import getUserIdFromToken from '../../helpers/getUserIdFromToken';

export default class PurchaseController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { total, user_id } = req.body;
      const newOrder = await Purchase.create({
        total,
        user_id,
      });
      return res.status(201).json(newOrder);
    } catch {
      return res.status(400).json({ message: MESSAGE.ERROR.REGISTER.PURCHASE });
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findPurchase = await Purchase.findAll({
        include: {
          model: User,
          attributes: {
            exclude: ['password', 'email', 'scope', 'updatedAt', 'deletedAt'],
          },
        },
      });

      return res.status(200).json(findPurchase);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findPurchase = await Purchase.findByPk(id);

      if (!findPurchase) {
        return res.status(404).json({ message: MESSAGE.ERROR.ID_NOT_FOUND });
      }
      findPurchase = await Purchase.findByPk(id, {
        include: User,
        attributes: {
          exclude: ['password', 'email', 'scope', 'createdAt', 'updatedAt'],
        },
      });
      return res.status(200).json(findPurchase);
    } catch {
      return res.status(500).json({ message: MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findAllUserPurchase = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const id_user = getUserIdFromToken(req) as number;
    try {
      const findUserPurchases = await Purchase.findAll({
        where: { user_id: id_user },
        attributes: ['id_purchase', 'total', 'createdAt', 'discount_id'],
        include: {
          model: User,
          attributes: ['id_user', 'name'],
        },
      });
      return res.status(200).json(findUserPurchases);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;

      const { total, user_id } = req.body;

      const checkPurchase = await Purchase.findByPk(id);
      if (!checkPurchase) {
        return res.status(404).json({ message: MESSAGE.ERROR.ID_NOT_FOUND });
      }

      await Purchase.update(
        {
          total,
          user_id,
        },
        {
          where: {
            id_purchase: id,
          },
        }
      );

      const showPurchase = await Purchase.findByPk(id);
      return res.status(200).json(showPurchase);
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.UPDATE_REGISTER });
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deletePurchase = await Purchase.findByPk(id);
      if (!deletePurchase) {
        return res.status(404).json({ message: MESSAGE.ERROR.ID_NOT_FOUND });
      }
      await Purchase.destroy({
        where: {
          id_purchase: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ message: MESSAGE.ERROR.DELETE });
    }
  };
}
