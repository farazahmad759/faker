let express = require("express");
let apiRoutes = require("../controllers/api/index.js");
let router = express.Router();

// home
router.get("/", (req, res, next) => {
  res.send(
    `<h1>Please visit our <a href="https://github.com/farazahmad759/faker">Github Page</a> for documentation</h1>`
  );
});

exports.default = router;
exports.router = router;
