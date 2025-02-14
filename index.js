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
  res.render("home.ejs");
});

app.get("/html_css_js", (req, res) => {
  res.render("classes/html_css_js.ejs");
});

app.post("/home", (req, res) => {
  res.render("home.ejs");
});

/* Classes */
app.get("/bs5", (req, res) => {
  res.render("notes/03_bs5.ejs");
});

app.get("/js", (req, res) => {
  res.render("notes/04_js.ejs");
});

/* Assignments */
app.get("/html_personal_website", (req, res) => {
  res.render("assignments/html_personal_website.ejs");
});

app.get("/html_css_news_layout", (req, res) => {
  res.render("assignments/html_css_news_layout.ejs");
});

app.get("/js_calculator_app", (req, res) => {
  res.render("assignments/js_calculator_app.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
