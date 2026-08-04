import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Get the current directory path
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));
// extended ka matlab ap objects ke andar objects bhi de sakte ho
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static(path.join(__dirname, "public")));

// cookie parser taki user ke browser se cookies securely access kar pau and cookies set hi kar pau
app.use(cookieParser());

// Route import
import UserRoute from "./routes/user.routes.js";
app.use("/api/v1/user", UserRoute);

export { app };
