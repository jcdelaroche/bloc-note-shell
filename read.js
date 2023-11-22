const yargs = require("yargs");
const chalk = require("chalk");
const { getNotes, isEmpty } = require("./fs-func");

const readCommand = yargs.command({
  command: "read",
  describe: "Read all notes",
  handler() {
    const fileData = getNotes();
    isEmpty();
    fileData.forEach((note) => {
      console.log("Title : ", chalk.green(`${note.title}`));
      console.log("Body : ", chalk.cyan(`${note.body}`));
      console.log("Resolved : ", chalk.yellow(`${note.resolved}`));
    });
  },
});

module.exports = readCommand;
