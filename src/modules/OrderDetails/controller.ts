import { Request, Response } from "express";
import { OrderDetail, User } from "../../models";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { total, user_id } = req.body;
      const newOrder = await OrderDetail.create({
        total,
        user_id,
      });
      return res.status(201).json(newOrder);
    } catch {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const findOrder = await OrderDetail.findAll( {
        include: User
      } );
      return res.status(200).json(findOrder);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let findOrder = await OrderDetail.findByPk(id);

      if (!findOrder) {
        return res.status(404).json("Id não encontrado");
      }

      findOrder = await OrderDetail.findByPk(id, {
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(findOrder);
    } catch {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const { total, user_id } = req.body;

      const checkOrder = await OrderDetail.findByPk(id);
      if (!checkOrder) {
        return res.status(404).json("Id não encontrado");
      }

      await OrderDetail.update(
        {
          total,
        },
        {
          where: {
            id_order_detail: id,
          },
        }
      );

      const showOrder = await OrderDetail.findByPk(id);
      return res.status(200).json(showOrder);
    } catch (error) {
      return res.status(500).json("Não foi possível atualizar o cadastro");
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      let deleteOrder = await OrderDetail.findByPk(id);
      if (!deleteOrder) {
        return res.status(404).json("Id não encontrado");
      }
      await OrderDetail.destroy({
        where: {
          id_order_detail: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

};

export default controller;