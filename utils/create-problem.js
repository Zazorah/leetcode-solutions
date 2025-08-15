const fs = require("fs");
const path = require("path");

const [, , difficulty, problemName] = process.argv;

if (!difficulty || !problemName) {
  console.log("Usage: npm run create <easy|medium|hard> <problem-name>");
  process.exit(1);
}

const validDifficulties = ["easy", "medium", "hard"];
if (!validDifficulties.includes(difficulty.toLowerCase())) {
  console.log("Difficulty must be: easy, medium, or hard");
  process.exit(1);
}

const fileName = `${problemName.toLowerCase().replace(/\s+/g, "-")}.ts`;
let folderName = "";
switch (difficulty) {
  case "easy":
    folderName = "01 - Easy";
    break;
  case "medium":
    folderName = "02 - Medium";
    break;
  case "hard":
    folderName = "03 - Hard";
    break;
}

const filePath = path.join(folderName, fileName);

const template = `// Problem: ${problemName}
// Difficulty: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
// Link: 

function ${problemName.replace(/\s+/g, "")}(/* params */): void {
    // Your solution here
    return;
}

// Test cases
console.log(${problemName.replace(
  /\s+/g,
  ""
)}(/* test input */)); // Expected: /* expected output */
`;

fs.writeFileSync(filePath, template);
console.log(`Created: ${filePath}`);
