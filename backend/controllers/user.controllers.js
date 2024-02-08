// import db from "../models/index.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../util/generateToken.js";
import { Op } from "sequelize";
// const { User } = db;
// CRUD Controllers

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.findAll({ where: { _id: {[Op.ne]: loggedInUserId } }});

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

//get all users
export const getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => console.log(err));
};

//get user by id
export const getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      res.status(200).json({ user: user });
    })
    .catch((err) => console.log(err));
};

//create user
export const signup = async (req, res, next) => {
  const { fullName, username, password, confirmedPassword, gender } = req.body;
  // verify passwords matches
  if (password !== confirmedPassword)
    return res.status(400).json({ error: "Passwords do no match!" });
  // check if user already exists
  const user = await User.findOne({ where: { username } });
  if (user) return res.status(400).json({ error: "User already exists!" });

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // https://avatar-placeholder.iran.liara.run/
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  User.create({
    fullName: fullName,
    username: username,
    password: hashedPassword,
    gender: gender,
    profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
  })
    .then((result) => {
      console.log("Created user");
      if (result) {
        generateTokenAndSetCookie(result.id, res)
        res.status(201).json({
        message: "User created successfully!",
        user: result
      });
      } else {
        res.status(400).json({ error: "Invalid user data" + result});
      }
    })
    .catch((err) => {
      console.log(
        `\n \x1b[31m ERROR : Error in signup user controller ${err.message} \x1b[0m \n`
      );
      res.status(500).json({ err: "Internal Server Error" });
    });
};

//update user
export const updateUser = (req, res, next) => {
  const userId = req.params.userId;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      user.name = updatedName;
      user.email = updatedEmail;
      return user.save();
    })
    .then((result) => {
      res.status(200).json({ message: "User updated!", user: result });
    })
    .catch((err) => console.log(err));
};

//delete user
export const deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      return User.destroy({
        where: {
          id: userId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "User deleted!" });
    })
    .catch((err) => {
      console.log(
        `\n \x1b[31m ERROR : Error in deleteUser controller ${err.message} \x1b[0m \n`
      );
      res.status(500).json({ err: "Internal Server Error" });
    });
};
