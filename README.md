# File Organizer 📁🔍

Hey there, coder! Welcome to the File Organizer, a Node.js script designed to keep your digital space tidy and organized effortlessly. Whether you're a seasoned developer or just diving into the coding realm, this script is here to streamline your file management process with style. Let's dive into the details:

## Features 💫

- **Efficient Organization**: Say goodbye to clutter! This script sorts your files based on their extensions, making it easier than ever to locate what you need.
- **Automatic Directory Creation**: No need to manually create folders for each file type. The script does it for you on the fly, ensuring a structured storage system.
- **Seamless File Movement**: With just a few simple steps, your files are relocated to their designated directories, leaving you with a neatly organized workspace.

## Requirements 🛠️

To get started, make sure you have Node.js installed on your machine, preferably version 12 or later. If you haven't already, you can grab it from the [official Node.js website](https://nodejs.org/).

## Installation Guide 🚀

1. **Clone the Repository**: Start by cloning this repository to your local machine. Use the following command in your terminal:
   
   ```bash
   git clone https://github.com/yourusername/file-organizer.git
   cd file-organizer
   ```

2. **Update the Directory Path**: Open the index.js file and update the initial directory path to the location you want to organize. Simply replace the default path with your desired directory path.

  ```js
  const getPath = (
    target = "",
    initial = "C:\\Users\\ashut\\Downloads" // Update this path
  ) => path.join(initial, target);
  ```
3. **Run the script**: Once you've configured the directory path, it's time to put the script into action. Run the following command in your terminal:
  ```bash
  node index.js
  ```
That's it! Sit back, relax, and watch as your files find their rightful places in your digital domain. If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request—we're all about collaboration here.

Happy organizing, and keep coding cool! 😎✨

Feel free to tweak it further to match your style or add any additional information you think would be helpful!
   
