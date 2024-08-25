import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://api.europeana.eu/record/v2/search.json";

// functionalities to do:
// 1. search bar for user to enter the artist they wna find out about
// 2. use api to get what we need
// 3. or search for artwork
// 4. find out how i can hide my api key in gitignore

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.post("/get-art", async (req, res) => {
  const searchedArt = req.body.artistInput;
  try {
    const result = await axios.get(
      API_URL + "?query=" + searchedArt + "&wskey=eaterumbro"
    );
    console.log(result.data);
    res.render("index.ejs", {
      content: result.data.items,
    });
  } catch (error) {
    console.log(error);
    //res.render("index.ejs", { title: JSON.stringify(error.response) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
