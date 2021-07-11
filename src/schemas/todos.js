module.exports = {
  main: {
    id: {
      type: "datatype.number",
      primaryKey: true,
    },
    title: { type: "lorem.word" },
    content: { type: "lorem.sentence" },
    completed: { type: "datatype.boolean" },
    createdAt: { type: "datatype.datetime" },
    updatedAt: { type: "datatype.datetime" },
    deletedAt: { type: "datatype.datetime" },
  },
};
