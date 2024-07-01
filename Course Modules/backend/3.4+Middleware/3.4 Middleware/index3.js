import express from "express";

const app = express();
const port = 3000;

app.use(logger);

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL : ", req.url);
  //in order to pass the control to the next function/ middleware
  //next() is needed
  next();
}

//at the home page, if we use the get method it returns us the request that was sent
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
