const yargs = require("yargs");
const { getNotes, save } = require("./fs-func");

const editCommand = yargs.command({
  command: "edit",
  describe: "Edit a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    newbody: {
      describe: "New body",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    const fileData = getNotes();
    const note = fileData.find(
      (note) => note.title.toLowerCase() === args.title.toLowerCase()
    );
    if (!note) return console.log("No note with this title");
    note.body = args.newbody;
    console.log("Note edited");
    save(fileData);
  },
});

module.exports = editCommand;
