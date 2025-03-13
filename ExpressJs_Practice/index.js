import express from "express";
import path from 'path'
import { join } from "path";
import route from './Routes/route.js'
const app= express();

// import students from "./Routes/student.js";
// import teachers from './Routes/teacher.js';

////HTTP Methods

//Get is used to retrieve data
//post is used to create/insert data
//put method is used to completely update data
//patch is used to partially update data
//delete is used to delete data
//all


//Basic Routing

// app.get('/', (req, res) => {
//     res.send("Welcome to Home")
// })

// app.get('/about', (req, res)=>{
//     res.send("<h1>Welcome to About</h1>")
// })
// app.get('/contact', (req, res)=>{
//     res.send("<h1>Welcome to Contact</h1>")
// })


//Advance ROuting Ex: String patern path

// app.get('/ab?cd', (req, res) =>{
//     res.send("If the user send (acd) or if(abcd) then this will run")
// })

//Regex

// app.get(/x/, (req, res) =>{
//     res.send("if x  presents it will run ")
// })

// app.get(/^\/users\/[0-9]{4}$/, (req, res) =>{
//     res.send("it will run ")
// })


// app.route('/student')
// .get((req, res) => res.send("All Students"))
// .post((req, res) => res.send("Add New Students"))
// .put((req, res) => res.send("Update Students"))
// .delete((req, res) => res.send("delete Students"))


//Express Js Router

//1. Craete routes folder and put your routes in a seperate file
//2.Create Instance of express.Router()
//3.Instead of app.method change to "router.method"
//4.Export Router
//5.Import Router
//6. use the app.use method it is a built-in middleware & provide your routes
// app.use('/students', students)
// app.use('/teachers', teachers)


//Route Params
// app.get("/",(req, res)=>{
//     res.sendFile(path.join(process.cwd(), './public/index.html'));
// } )

// app.use(express.static('public'))

app.set('view engine', "ejs")
app.use('/', route)
app.listen(8000);
