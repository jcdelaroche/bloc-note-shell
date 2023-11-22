const fs = require("fs");

const save = (data) => {
  fs.writeFileSync("notes.json", JSON.stringify(data));
};

const getNotes = () => {
  if (!fs.existsSync("notes.json")) {
    fs.writeFileSync("notes.json", "[]");
  }
  return JSON.parse(fs.readFileSync("notes.json", "utf8"));
};

const isEmpty = () => {
  getNotes.length === 0 && console.log("No notes to read");
};

module.exports = { save, getNotes, isEmpty };
