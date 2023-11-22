const yargs = require("yargs");
const { getNotes, isEmpty } = require("./fs-func");
const pouletProps = ["MIEL", "ANANAS", "ARACHIDE"];

const readOneCommand = yargs.command({
  command: "readone",
  describe: "Read one note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    poulet: {
      describe: "Hidden treasure",
      demandOption: false,
      type: "string",
    },
  },
  handler(args) {
    if (args.poulet && pouletProps.includes(args.poulet.toUpperCase())) {
      console.log(
        "You found the hidden treasure !" +
          ` it goes so well with ${args.poulet} :p`
      );
      return;
    }
    const fileData = getNotes();
    isEmpty();

    fileData.find((note) => note.title === args.title)
      ? console.log("Found note : ", note)
      : console.log("No note with this title");
  },
});

module.exports = readOneCommand;
