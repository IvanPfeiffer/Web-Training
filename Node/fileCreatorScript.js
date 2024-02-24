const fs = require("fs");


const dirName = process.argv[2] || "Project"; //This will requiere the user to enter a name for the dir.

try{
    fs.mkdirSync(dirName);
fs.writeFileSync(`${dirName}/app.js`,"")
fs.writeFileSync(`${dirName}/app.css`,"")
fs.writeFileSync(`${dirName}/index.html`,"")
} catch(e){
    console.log(e)
}

