import express from "express";

const app = express(); //creating app using the express object

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1><p>I am Rachel</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1>");
});
app.listen(3000, () => {
  console.log("test");
}); //callback function (console log)
