var faker = require("faker");
exports.generateData = (schema, query) => {
  let data = {};
  Object.keys(schema).forEach((schemaKey) => {
    let schemaKeyValue = schema[schemaKey];
    let children = schemaKeyValue.split(".");
    if (query[schemaKey]) {
      console.log("---> exists", schemaKey);
      data[schemaKey] = query[schemaKey];
    } else {
      let temp = faker[children[0]];
      if (temp) {
        data[schemaKey] = temp[children[1]](10);
      }
    }
  });
  return data;
};
