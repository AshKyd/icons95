const fs = require("fs");
const icons = {};
const extension = /\.gif$/;

function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer.from(bitmap).toString("base64");
}

["16", "24", "32", "custom"].forEach(dir => {
  icons[dir] = {};
  const files = fs
    .readdirSync("./" + dir)
    .filter(file => file.match(extension))
    .forEach(file => {
      icons[dir][file.replace(extension, "")] = base64_encode(
        "./" + dir + "/" + file
      );
    });
});

console.log("export default " + JSON.stringify(icons));
