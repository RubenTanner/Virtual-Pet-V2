import express from "express";

//a static express server
const app = express();

app.use(express.static("webpages"));

app.listen(8080, () => console.log("listening on port 8080"));
