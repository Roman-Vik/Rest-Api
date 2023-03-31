import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import router from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT ;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api", router)
/*
app.use("/users", router)
app.use("/posts", router)
app.use("/others", router)
*/

async function main() {
  try {
    await mongoose.connect(process.env.db);
    app.listen(PORT, () => {
      console.log(`server connect ${process.env.PORT}`);
    });
  } catch (err) {
    throw Error(err);
  }
}
main();
