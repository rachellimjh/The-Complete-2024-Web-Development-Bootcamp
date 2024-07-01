//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var isAuthorised = false;

//first middleware that happens, parses information
app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password == "ILoveProgramming") {
    isAuthorised = true;
  }
  next();
}
//1. use the middleware
app.use(passwordCheck);

//2. get route sends the html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//3. post method to submit the form to the /check route
app.post("/check", (req, res) => {
  if (isAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
