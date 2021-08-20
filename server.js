const express = require("express");
const  mongoose = require("mongoose");
const  cookieParser = require("cookie-parser");
const  path = require("path");
const  cors = require("cors");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 80;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// to serve react app
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'mern/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'mern/build', 'index.html'));
    });
  }

//routes
app.use(authRoutes);

//database connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then((result) => app.listen(PORT))
.catch((err) => {
    console.log(err);
    app.listen(PORT)
});