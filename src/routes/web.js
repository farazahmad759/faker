let express = require("express");
let apiRoutes = require("../controllers/api/index.js");
let router = express.Router();

/****************************************************************
 * apiRoutes
 * **************************************************************
 */
// todos
router.post("/todos", apiRoutes.todos.getAll);

exports.default = router;
