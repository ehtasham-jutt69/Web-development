const fs=require ("fs");
console.log("hello world!")
const file="readfile.txt"
const option= {
 encoding: "utf8"
}
const data =fs.readFileSync("readfile.txt" , option)
console.log(data);