const fs = require("fs");
const path = require("path");

// Function to construct a path based on target and initial directory
const getPath = (
  target = "",
  initial = "C:\\Users\\ashut\\Downloads" // Initial directory containing the files to be organized
) => path.join(initial, target);

// Read the directory
fs.readdir(getPath(), (err, files) => {
  if (err) throw err;

  // Iterate over each file
  files.forEach((file) => {
    const extension = path.extname(file).slice(1); // Get the file extension without the dot
    const extensionDir = getPath(extension); // Directory for this extension

    // Check if the directory for the extension exists, if not, create it
    if (!fs.existsSync(extensionDir)) fs.mkdirSync(extensionDir);

    // Construct the source and destination paths
    const sourcePath = getPath(file);
    const destinationPath = getPath(file, extension);

    // Move the file to the new directory
    fs.rename(sourcePath, destinationPath, (err) => {
      if (err) throw err;
    });
  });
});
