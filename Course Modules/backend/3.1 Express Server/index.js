import express from "express";
const app = express();
const port = 3000;

// "/" is the root html directory
app.get("/", (req, res) => {
  res.send("Hello,World!");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
