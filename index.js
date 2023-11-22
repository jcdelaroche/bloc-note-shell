const yargs = require("yargs");
const chalk = require("chalk");

require("./add");
require("./read");
require("./readOne");
require("./edit");
require("./resolve");
require("./remove");

console.log("Welcome to the Todo CLI!");
console.log("========================" + "\n");
console.log(
  chalk.red("Get started by creating a new Note with the command"),
  chalk.green(
    'node index.js add --title "name of your note" --body "body of your note"'
  )
);
console.log(
  chalk.red("Or display all notes with the command "),
  chalk.green("node index.js read")
);
console.log(
  chalk.red(
    "You can also search for a specific note by title with the commands "
  ),
  chalk.green('node index.js readone --title "name of your note"')
);

yargs.parse();
