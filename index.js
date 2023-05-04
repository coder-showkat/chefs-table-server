const express = require("express");
const cors = require("cors");
const Chefs = require("./chef.json");
const Testimonials = require("./testimonials.json");
const Blogs = require("./blog.json");

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

// recipes route
app.get("/api/recipes/:chef", (req, res)=>{
    const name = req.params.chef;
    const selectedChef = Chefs.find(info=>info.name.split(" ").join("-") === name);
    res.send(selectedChef);
})

// testimonials get api
app.get("/api/chefs-table/testimonials", (req,res)=>{
    res.send(Testimonials);
});

// blogs get api
app.get("/api/blogs", (req, res)=>{
    res.send(Blogs);
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
