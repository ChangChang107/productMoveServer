var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var connectDB = require("./config/connectDB");
var initWebRouter = require("./routes/index");
<<<<<<< HEAD
require("dotenv").config();
var cors = require("cors");

var app = express();
app.use(
  cors({
    // origin: ["http://localhost:3000"],
    origin: '*',
=======
var cors = require("cors");

var app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
>>>>>>> 8c3beece1d17de2fbd79ae8877e9d444148d0e47
    credentials: true,
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

console.log(process.env.uri);
connectDB();
initWebRouter(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
let port = process.env.port || 8000;
app.listen(port, () => {
  console.log("server run on port :" + port);
});
