module.exports = {
  main: {
    id: {
      type: "datatype.number",
      primaryKey: true,
    },
    firstName: { type: "name.firstName" },
    lastName: { type: "name.lastName" },
    email: { type: "internet.email" },
    createdAt: { type: "datatype.datetime" },
    updatedAt: { type: "datatype.datetime" },
    deletedAt: { type: "datatype.datetime" },
  },
};
