const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");

//Output a promt
process.stdout.write("promt > ");

//The stdin 'data' event fires after a user type in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const cmdArr = cmd.split(" ");

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmdArr[0] === "cat") {
    cat(cmdArr[1]);
    console.log();
  } else {
    process.stdout.write("You wrote:" + cmd);
  }
  process.stdout.write("\nprompt > ");
});
