import { DataTypes, Sequelize, UUID } from "sequelize";
import db from "../util/database.js";

const User = db.define(
  "user",
  {
    _id: {
	  type: Sequelize.UUID,
	  defaultValue: Sequelize.UUIDV4,
    //   autoIncrement: true,
      primaryKey: true,
	  allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 6,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      enum: ["male", "female"],
    },
    profilePic: {
      type: DataTypes.STRING,
      default: "",
    },
    // createdAt, updatedAt => Member since <createdAt>
  },
  {
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
    scopes: {
      withPassword: {
        attributes: {},
      },
    },
  },
  { timestamps: true }
);

export default User;
