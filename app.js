const express = require("express");

require("dotenv").config("express");
const expressLayout = require("express-ejs-layouts");

// connection the Database
const connectDB = require("./server/config/db");

connectDB();

// const bootstrapIcons = require("bootstrap-icons");

const app = express();

const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// SERVING OUR STATIC FILES/FOLDER
app.use(express.static("public"));

// TEMPLATING ENGINE
app.use(expressLayout);

// SETTING UP OUR TEMPLATING ENGINE
app.set("layout", "./layouts/main");

// SETTING UP OUR VIEW ENGINE
app.set("view engine", "ejs");

// ROUTES
app.use("/", require("./server/routes/customer"));

// HANDLING 404 ERROR
app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`APP LISTENING ON PORT ${port}`);
});
