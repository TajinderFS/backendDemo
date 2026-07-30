import { app } from "./app";
import connectDb from "./db";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

const PORT = process.env.port || 8000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Mongodb connection failed !!!`, error);
  });
