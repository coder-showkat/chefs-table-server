const express = require("express");
const cors = require("cors");
const Chefs = require("./chef.json");

const app = express();
const port = 5001;

// middleware
app.use(cors());

// home route
app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center;'>Welcome to Chef's Table server</h1>"
  );
});

// chef api route
app.get("/api/chef", (req, res) => {
    res.send(Chefs);
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
