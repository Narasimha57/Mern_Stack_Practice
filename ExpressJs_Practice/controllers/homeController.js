import { name } from "ejs"

const homeController = (req, res) =>{
const data = {
    name: "bablu",
    userId: 20
}
    res.render("index", data)
}



export  default homeController