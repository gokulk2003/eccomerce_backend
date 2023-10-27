require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const imageFetch = require("./routes/imagesFetch");
const contact = require("./routes/contact");
// database connection
mongoose.set('strictQuery', true);
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/fetch", imageFetch);
app.use("/api/contact", contact);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
