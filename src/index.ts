import express from "express";
import morgan from "morgan";

const server = express();

server.use(morgan('tiny'));

server.get("/", (req, res) => {
    res.send("ok ok");
});

server.listen(8000, () => console.log("server listening on port 8000"));
