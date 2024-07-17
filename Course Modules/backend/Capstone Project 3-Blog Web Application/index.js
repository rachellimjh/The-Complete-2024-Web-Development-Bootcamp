import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//implementing the post creation feature
//creating the form on the home page
//handling the form submission in the server
app.post("/create-post", (req, res) => {
  const { title, date, content } = req.body;
  const newPost = { title, date, content };
  res.render("index.ejs", { post: newPost });
});
