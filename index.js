require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("Task Management Server Application!");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "task_management",
  })
  .then(() => {
    console.log("Connected to database!");
    const portNumber = process.env.PORT || 8000;
    app.listen(portNumber, () => {
      console.log(`Server is running on port: ${portNumber}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed:", err);
  });

app.use("/api/tasks", taskRoutes);
