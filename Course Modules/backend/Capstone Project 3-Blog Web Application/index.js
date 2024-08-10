import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/edit-post/:index", (req, res) => {
  const { index } = req.params;
  const post = posts[index];
  res.render("edit.ejs", { index, post });
});

//implementing the post creation feature
//creating the form on the home page
//handling the form submission in the server
app.post("/create-post", (req, res) => {
  const { title, date, content } = req.body;
  const newPost = { title, date, content };
  posts.push(newPost);
  // res.render("index.ejs", { posts: posts });
  res.redirect("/");
});

//to edit posts
app.post("/update-post/:index", (req, res) => {
  const { index } = req.params;
  const { title, date, content } = req.body;
  posts[index] = { title, date, content };
  // res.render("index.ejs", { posts: posts });
  res.redirect("/");
});

//to delete posts
app.post("/delete-post/:index", (req, res) => {
  const { index } = req.params;
  posts.splice(index, 1);
  // res.render("index.ejs", { posts: posts });
  res.redirect("/");
});
