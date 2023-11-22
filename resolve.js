const yargs = require("yargs");
const { getNotes, save } = require("./fs-func");

const resolveCommand = yargs.command({
  command: "resolve",
  describe: "Resolve a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    const fileData = getNotes();
    fileData.find(
      (note) => note.title.toLowerCase() === args.title.toLowerCase()
    ).resolved = true;
    console.log("Note resolved");
    save(fileData);
  },
});

module.exports = resolveCommand;
