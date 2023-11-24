import express, { NextFunction, Request, Response, json } from "express";
import cors from "cors";
import user_router from "./routes/userRoutes";


const app = express();

app.use(cors());
app.use(json());

app.use("/user", user_router);


app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: error.message,
  });
});

app.listen(5200, () => {
  console.log("Server running on port 5200");
});
