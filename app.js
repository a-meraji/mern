const express = require("express");
const  mongoose = require("mongoose");
const  cookieParser = require("cookie-parser");
const  path = require("path");
const  cors = require("cors");
const authRoutes = require("./routes/authRoutes");
//const  allCourses = require("./data.js");

const PORT = 80;

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// to serve react app
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'mern/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'mern/build', 'index.html'));
    });
  }

//database connection
const dbURI = 
"mongodb+srv://amin:mernstack@cluster0.3skt2.mongodb.net/node-auth";
mongoose.connect(dbURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then((result) => app.listen(PORT))
.catch((err) => {
    console.log(err);
    app.listen(PORT)
});

//routes
app.use(authRoutes);