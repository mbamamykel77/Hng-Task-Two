import express from "express";
import mongoose from "mongoose";
import { router as userRoute } from "./routes/user.route.js";
import "./db/connect.js"


const app = express();
const port = Number(process.env.PORT) || 5000;


app.use(express.json());

app.use("/api", userRoute);


// mongodb connection
mongoose
  .connect(process.env.MongoURI)
  .then(() => console.log("Database Connection Established"))
  .catch((e) => console.log(e.message));
console.log(process.env.MongoURI);


app.listen(port, () => console.log(`server is listening on ${port}...`) );