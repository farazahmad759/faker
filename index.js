require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT ? process.env.PORT : 4000;

const cors = require("cors");
const apiRoutes = require("./src/routes/api.js");
// const webRoutes = require("./src/routes/web.js");

// setup cors
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static("apps/tools/build"));

// ROUTES
app.use("/api/v1", apiRoutes.router);
// app.use("/", webRoutes.router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
