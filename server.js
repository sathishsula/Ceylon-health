const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8070;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const patientRouter = require("./routes/patients");
app.use("/patient", patientRouter);

const admintRouter = require("./routes/admins");
app.use("/admin", admintRouter);
