const yargs = require("yargs");
const { getData, save } = require("./fs-func");

const removeCommand = yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    const fileData = getData();
    const newFile = fileData.filter(
      (note) => note.title.toLowerCase() !== args.title.toLowerCase()
    );
    if (newFile.length === fileData.length)
      return console.log("No note with this title");
    save(newFile);
  },
});

module.exports = removeCommand;
