import express from "express";
import dotenv from "dotenv";
import sequelize from "./util/database.js"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import messageRoutes from "./routes/message.routes.js"
import bodyParser from "body-parser"

const app = express();
// parse requests of content-type - application/json
app.use(express.json());
app.use(cookieParser());
 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json()); // for parsing application/json

dotenv.config();
const PORT = process.env.PORT || 5005;

app.get("/", (req, res) => {
  // root route http://localhost:5005
  res.send("Server is ready!");
});

//CRUD routes
app.use('/api/users', userRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

//error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });
  
  //sync database
//   sequelize
//     .sync({ force: true })
//     .then(result => {
//       console.log("Database connected");
//       app.listen(5005, () => console.log(`Server is running on port ${PORT}`))
//     })
//     .catch(err => console.log(err));
    
    sequelize
    .sync()
    .then(result => {
      console.log("Database connected");
      app.listen(5005, () => console.log(`Server is running on port ${PORT}`))
    })
    .catch(err => console.log(err));
// app.listen(5005, () => console.log(`Server is running on port ${PORT}`));
