// // import db from "../models/index.js";
// import User from "../models/user.model.js"
// // const { User } = db;
// // CRUD Controllers

// //get all users
// export const getUsers = (req, res, next) => {
//   User.findAll()
//     .then((users) => {
//       res.status(200).json({ users: users });
//     })
//     .catch((err) => console.log(err));
// };

// //get user by id
// export const getUser = (req, res, next) => {
//   const userId = req.params.userId;
//   User.findByPk(userId)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ message: "User not found!" });
//       }
//       res.status(200).json({ user: user });
//     })
//     .catch((err) => console.log(err));
// };

// //create user
// export const createUser = (req, res, next) => {
//   const { fullName, username, password, gender, profilePic  } = req.body;
//   console.log(fullName, username, password, gender, profilePic );
  
//   User.create({
//     fullName: fullName,
//     username: username,
//     password: password,
//     gender: gender,
//     profilePic: profilePic,
//   })
//     .then((result) => {
//       console.log("Created User");
//       res.status(201).json({
//         message: "User created successfully!",
//         user: result,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// //update user
// export const updateUser = (req, res, next) => {
//   const userId = req.params.userId;
//   const updatedName = req.body.name;
//   const updatedEmail = req.body.email;
//   User.findByPk(userId)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ message: "User not found!" });
//       }
//       user.name = updatedName;
//       user.email = updatedEmail;
//       return user.save();
//     })
//     .then((result) => {
//       res.status(200).json({ message: "User updated!", user: result });
//     })
//     .catch((err) => console.log(err));
// };

// //delete user
// export const deleteUser = (req, res, next) => {
//   const userId = req.params.userId;
//   User.findByPk(userId)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ message: "User not found!" });
//       }
//       return User.destroy({
//         where: {
//           id: userId,
//         },
//       });
//     })
//     .then((result) => {
//       res.status(200).json({ message: "User deleted!" });
//     })
//     .catch((err) => console.log(err));
// };
