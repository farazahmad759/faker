let { generateData } = require("../../utils/functions");
exports.getAll = async function (req, res) {
  let schema = {
    id: "datatype.number",
    title: "lorem.word",
    content: "lorem.sentence",
    createdAt: "datatype.datetime",
    updatedAt: "datatype.datetime",
    deletedAt: "datatype.datetime",
    comopleted: "datatype.boolean",
  };

  if (!req.query.limit) {
    req.query.limit = 20;
  }
  if (req.query.limit > 200) {
    req.query.limit = 200;
  }
  let data = [];
  for (let p = 0; p < parseInt(req.query.limit); p++) {
    data.push(generateData(schema, req.query));
  }
  res.send({ msg: "todos.getAll", data });
};
