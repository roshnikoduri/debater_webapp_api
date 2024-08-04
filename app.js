const express = require("express");
const cors = require('cors');
const user = require("./routes/User");
const discussion = require("./routes/Discussion");
const comment = require("./routes/Comment");
const turnament = require("./routes/Turnament");

const createDbConnection = require("./connection");
const app = express();
const PORT = 8000;
//Middleware...
app.use(cors());
app.use(express.urlencoded({ extended: false }));
createDbConnection(
  "mongodb+srv://admin:admin@cluster0.b2yuzli.mongodb.net/restwebapp"
);

app.listen(PORT, () => {
  console.log("====================================");
  console.log("Server has started !");
  console.log("====================================");
});

app.use("/user", user);
app.use("/topic", discussion);
app.use("/comment", comment);
app.use("/turnament", turnament);

