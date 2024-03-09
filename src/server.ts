import express from "express";
import GeneralRouter from "./routes/GeneralRoutes";
import path from "path";
import cors from "cors";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(GeneralRouter);
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.listen(3000, () => {
    console.log("Server is running -> http://localhost:3000/");
});
