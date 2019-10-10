const fs = require("fs");

// fs.renameSync("./storage-files", "./storage");

fs.readdirSync("./storage").forEach(fileName => {
  fs. unlinkSync(`./storage/${fileName}`);
}); //must remove files from dir before removing the dir

fs.rmdir("./storage", err => {
  if (err) {
    throw err
  }
  console.log("./storage directory removed");
})