import path from "path";
import express from "express";
import dotenv from "dotenv";
import sequelize from "./util/database.js"
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import messageRoutes from "./routes/message.routes.js"
import bodyParser from "body-parser"
import { app, server } from "./socket/socket.js";

// const app = express();
const __dirname = path.resolve();

var corsOptions = {
  origin: "http://34.228.65.92:3051"
};

app.use(cors(corsOptions));

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

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });
    
sequelize
    .sync()
    .then(result => {
      console.log("Database connected");
      server.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
      });
    })
    .catch(err => console.log(err));