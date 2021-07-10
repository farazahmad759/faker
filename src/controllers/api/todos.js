let { generateData } = require("../../utils/functions");
let schemas = require("../../schemas/index");
exports.getOne = async function (req, res, next) {
  if (isNaN(req.params.id)) {
    return res.send({ msg: "No record found", data: [] });
  }
  let _resourceName = getResourceName(req.url, `/`, `/`);
  if (!_resourceName) {
    return res.send({ msg: "No record found", data: [] });
  }
  if (!schemas[_resourceName]) {
    return res.send({ msg: "No record found", data: [] });
  }
  let schema = schemas[_resourceName].main;
  let data = {};
  data = generateData(schema, { id: req.params.id });
  res.send({ msg: "todos.getOne", data });
};

exports.getAll = async function (req, res) {
  let _resourceName = getResourceName(req.url, `/`, `?`);
  if (!_resourceName) {
    return res.send({ msg: "No record found", data: [] });
  }
  if (!schemas[_resourceName]) {
    return res.send({ msg: "No record found", data: [] });
  }
  let schema = schemas[_resourceName].main;
  //   console.log("-----> schemas", schemas);
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

function getResourceName(url, startChar, endChar) {
  let extract = "";
  if (!url.includes("?")) {
    url = url + "?";
  }
  let regExp = new RegExp(`\\${startChar}(.*)\\${endChar}`, ""); // /\/(.*)\?/

  extract = url.match(regExp);
  if (extract) {
    extract = extract.pop();
  }
  //   console.log(
  //     "----> url",
  //     url,
  //     "regExpression --> ",
  //     regExp,
  //     "extract ---> ",
  //     extract
  //   );
  return extract;
}
