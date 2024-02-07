import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../util/generateToken.js";

export const signup = async (req, res, next) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;
  console.log(fullName, username, password, confirmPassword, gender);
  // verify passwords matches
  if (password !== confirmPassword)
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
      console.log(
        `\n \x1b[31m created user. \x1b[0m \n`
      );
      
      if (result) {
        generateTokenAndSetCookie(result._id, res);
        res.status(201).json({
          message: "User created successfully!",
          user: result,
        });
      } else {
        res.status(400).json({ error: "Invalid user data" + result });
      }
    })
    .catch((error) => {
      console.log(
        `\n \x1b[31m ERROR : Error in signup auth controller ${error.message} \x1b[0m \n`
      );
      res.status(500).json({ error: "Internal Server Error" });
    });
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.scope('withPassword').findOne({ where: { username } });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password." });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(
      `\n \x1b[31m ERROR : Error in login controller ${error.message} \x1b[0m \n`
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(
      `\n \x1b[31m ERROR : Error in logout controller ${error.message} \x1b[0m \n`
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};
