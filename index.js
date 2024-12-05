import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import env from "dotenv";

const app = express();
const port = 3000;

env.config();  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.get("/html_css_js", (req, res) => {
  res.render("html_css_js.ejs");
});


app.post("/home", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
