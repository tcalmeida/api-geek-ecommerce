import {Sequelize, Model, DataTypes} from "sequelize"
import { mySqlConection } from "../database"

const connection = mySqlConection.getInstance()

export const User = connection.define("User",{
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
} )

export default User;