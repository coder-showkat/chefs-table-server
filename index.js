const express = require("express");
const cors = require("cors");
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

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
