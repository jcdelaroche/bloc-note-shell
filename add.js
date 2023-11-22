const yargs = require("yargs");
const { getNotes, save } = require("./fs-func");

const addCommand = yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    const fileData = getNotes();
    const exists = fileData.find((note) => note.title === args.title);
    if (exists) return console.log("Note title already exists");
    const note = {
      title: args.title,
      body: args.body,
      resolved: false,
    };
    fileData.push(note);
    console.log("Note added");
    save(fileData);
  },
});

module.exports = addCommand;
