import path from "path";
// import { URL } from "url";
import { URL } from "url";
import http from "http"

// console.log(path.basename("d:\\NodeJS_Practice\\package.json",".json"))

// console.log(path.dirname("d:\\NodeJS_Practice\\package.json"))

// console.log(path.extname("d:\\NodeJS_Practice\\package.json"))
// console.log(path.join("d:\\React Practice\\NodeJS_Practice"))

// console.log(path.normalize("d:\\React Practice\\NodeJS_Practice\\courses\\etc"))

// const myUrl = new URL("https:\\www.narasimhagonela.com:8080/p/a/t/h?quey=string#hash");
// console.log(myUrl.hostname)
// console.log(myUrl)

const server = http.createServer((req, res)=>{
    console.log(req.url)

})

server.listen(8000, ()=> console.log("Server created"))