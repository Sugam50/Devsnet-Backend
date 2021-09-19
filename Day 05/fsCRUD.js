var fs = require("fs");

//To create a folder
fs.mkdirSync("NewFolder");

//To create a file
fs.writeFileSync("Hello.txt","Hey this is the new file",(err)=>{
    if(err){
        console.error(err);
    }
});

//To update a file
fs.appendFileSync("Hello.txt","Updated File",(err)=>{
    if(err){
        console.error(err);
    }
});

//To read a file
var data=fs.readFileSync("Hello.txt","utf-8");
console.log(data);

//To rename a file
fs.renameSync("Hello.txt","Hello2.txt");

//To delete a file
fs.unlinkSync("Hello2.txt");

//To delete a folder
fs.rmdirSync("NewFolder");


