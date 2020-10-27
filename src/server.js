const express = require("express");

const port = process.env.PORT || 108;

const server = express();

server.get("/", (req, res) => {
    res.status(200).send("Server is up and running");
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});