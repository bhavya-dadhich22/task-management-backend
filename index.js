require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));


app.get('/', function (req, res) {
  res.send('Task Management Server Application!')
})

console.log('MONGO_URI:', MONGO_URI);

console.log('portNumber:', process.env.PORT);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database111!");
    const portNumber = process.env.PORT || 8000;
    console.log('portNumber:', portNumber);
    app.listen(portNumber, () => {
      console.log(`Server is running on port: ${portNumber}`);
    });
  })
  .catch((err) => {
  console.log('MONGO_URI1:', MONGO_URI);
  console.log('portNumber1:', process.env.PORT);
  console.log("Connection failed:", err);
  });

app.use("/api/tasks", taskRoutes);

// const PORT = process.env.PORT || 6000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
