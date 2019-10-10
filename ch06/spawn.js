const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Brice \n")
questionApp.stdin.write("Oakland \n")
questionApp.stdin.write("Stuff \n")

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process existed`);
});