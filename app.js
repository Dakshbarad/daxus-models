const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// const livereload = require('livereload')
// const connectLivereload = require('connect-livereload')

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch([__dirname+'/views',__dirname+'/public'])


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Port listener
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
