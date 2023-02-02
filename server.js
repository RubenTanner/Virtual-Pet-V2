import express from "express";

//return the page route to the client
// function responder(req, res) {
//   //gets the file name from the url
//   let fileName = req.url;
//   //if the file name is empty, set it to index.html
//   if (fileName === "/") {
//     fileName = "/index.html";
//   }
//   //send the file to the client
//   res.sendFile(__dirname + "/webpages" + fileName);
// }

//a static express server
const app = express();

//connect the responder function to the server
//app.get("/", responder);

app.use(express.static("webpages"));

app.listen(8080, () => console.log("listening on port 8080"));
