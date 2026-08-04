import { app } from "./app.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

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
