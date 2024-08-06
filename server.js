import express from "express";
const app = express();
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

// routers
import jobRouter from "./routes/jobRouter.js";

if (process.env.NODE_ENV == "devlopment") {
  app.use(morgan("dev"));
} // to check if it production or devlopment,
// if it production we don't show the log

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  // for all kind of request for the error
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PO || 5000;
app.listen(port, () => {
  console.log(`server is running on PORT ${port}....`);
});
