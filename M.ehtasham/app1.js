const fs = require("fs");
const data ='some data to be stored in a file  by me  ';
const file =" app1file.txt"


fs.writeFileSync(file , data ,{flag :  "w"} )