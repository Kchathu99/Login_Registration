// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// const connection = require("./db");
// const userRoutes = require("./Routes/users");
// const authRoutes = require("./Routes/auth");

// // database connection
// connection();


// mongoose.connect(process.env.DATABASE).then(() => {
//     console.log("Connected To Database");
// })

// // middlewares
// app.use(express.json());
// app.use(cors());

// // routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

// const port = process.env.PORT || 8080;
// app.listen(port, console.log(`Listening on port ${port}...`));

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 6000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB).then(() => {
    console.log("Connected To Database");
});

app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.url, req.body);
    next();
});

const userRoutes = require("./Routes/users");
const authRoutes = require("./Routes/auth");

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log("Listening on port " + port);
});
