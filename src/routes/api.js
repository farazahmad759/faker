let express = require("express");
let apiRoutes = require("../controllers/api/index.js");
let router = express.Router();

/****************************************************************
 * apiRoutes
 * **************************************************************
 */
// todos
router.get("/*/:id", apiRoutes.todos.getOne);
router.get("/*", apiRoutes.todos.getAll);

exports.default = router;
exports.router = router;
