const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

// middleware
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})