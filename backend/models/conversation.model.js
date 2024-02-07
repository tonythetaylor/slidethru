import { DataTypes, Sequelize } from "sequelize";
import db from "../util/database.js";
import User from "./user.model.js";
import Message from "./message.model.js";

const Conversation = db.define(
  "conversation",
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      //   autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    participants: {
      type: Sequelize.ARRAY(Sequelize.UUID),
      allowNull: true,
      defaultValue: [],
    },
    messages: {
      type: Sequelize.ARRAY(Sequelize.UUID),
      allowNull: true,
        defaultValue: [],
    //   references: {
    //     model: Message,
    //     key: "_id",
    //   },
    },
    // messages: {
    //   type: DataTypes.ARRAY(Sequelize.UUID),
    //   allowNull: true,
    //   references: {
    //     model: Message,
    //     key: "msg_id",
    //   },
    //   defaultValue: []
    // },
    // createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
);

// Conversation.belongsTo(User, {
//   foreignKey: "senderId",
//   as: "Sender",
// });
// Conversation.belongsTo(User, {
//   foreignKey: "receiverId",
//   as: "Receiver",
// });

export default Conversation;
