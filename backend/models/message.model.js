import { DataTypes, Sequelize } from "sequelize";
import db from "../util/database.js";
import User from "./user.model.js";

const Message = db.define(
  "message",
  {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        // autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
    senderId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: User,
          key: '_id'
        },
    },
    receiverId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: User,
          key: '_id'
        },
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // conversation_id: {
    //     type: Sequelize.UUID,
    //     allowNull: false,
    //     references: {
    //       model: 'conversations',
    //       key: '_id'
    //     }
    //   },
    // createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
);

export default Message;