import mongoose from "mongoose";

//Defining schema
 const movieSchema = new mongoose.Schema({
    name : {type: String, required: true, trim: true,},
    ratings : {type: Number, required: true, min: 1, max : 5},
    money: {
        type: mongoose.Decimal128,
        required:true,
        validate : v => v>=10,
    },
    genre: {type: Array},
    isActive: {type: Boolean},
    comments: [ 
        { value:{type: String},
        published: {type: Date, default: Date.now()}},
    ]
})

//Creating Model

const MovieModel = mongoose.model("Movie", movieSchema)


// this function is used to insert the data into the database

// const insertMany = async() =>{
//     try {
//         //creating a new Document
//         // const m1 = new MovieModel({
//         //     name: "Narasimha Gonela",
//         //     ratings: 5,
//         //     money: 899990,
//         //     genre: ['Adventure', "Hilarious", "Sad"],
//         //     isActive: true,
//         //     comments: [{ value: "This story is really true based story"}]
//         // })
//         // const m2 = new MovieModel({
//         //     name: "Motu Patlu",
//         //     ratings: 5,
//         //     money: 899990,
//         //     genre: ['Adventure', "Hilarious", "Funny"],
//         //     isActive: true,
//         //     comments: [{ value: "This story is really AweSome"}]
//         // })
//         // const m3 = new MovieModel({
//         //     name: "Doreamon",
//         //     ratings: 5,
//         //     money: 899990,
//         //     genre: ['Adventure', "Hilarious", "Sad"],
//         //     isActive: true,
//         //     comments: [{ value: "This story is really true based story"}]
//         // })
//         // const m4 = new MovieModel({
//         //     name: "Naruto",
//         //     ratings: 5,
//         //     money: 899990,
//         //     genre: ['Adventure', "Hilarious", "Sad"],
//         //     isActive: true,
//         //     comments: [{ value: "This story is really true based story"}]
//         // })
//         // const m5 = new MovieModel({
//         //     name: "OnePiece",
//         //     ratings: 5,
//         //     money: 899990,
//         //     genre: ['Adventure', "Hilarious", "Sad"],
//         //     isActive: true,
//         //     comments: [{ value: "This story is really true based story"}]
//         // })
//         // const m6 = new MovieModel({
//         //     name: "Solo Leveling season 2",
//         //     ratings: 5,
//         //     money: 899990,
//         //     genre: ['Adventure', "Hilarious", "Sad"],
//         //     isActive: true,
//         //     comments: [{ value: "This story is really true based story"}]
//         // })
//         // const result = await MovieModel.insertMany([m1, m2, m3, m4, m5, m6])  --> it is used to add data to dataBase

//         const result = await MovieModel.find() //it is used to retrive the data from databse

//         result.forEach((movie)=>{
//             console.log(movie.name)
//         })
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

//this function is used to retrive the data

// const allDoc = async() =>{
//     try {
//         const result = await MovieModel.find() //it is used to retrive the data from databse

//         result.forEach((m) => { 
//             console.log(m.name)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }


//This function is use to update the Doc
// const updateDoc = async(id) =>{
//     try {
//         //updateOne method it takes 2 parameters i.e (filter, whatToChange)
//         const result = await MovieModel.updateMany({ratings: 5}, {name: "MERN STACK  5 Stars"} ) 
//         // result.forEach((m) => { 
//         //     console.log(m.name)
//         // })
//     } catch (error) {
//         console.log(error)
//     }
// }

const deleteDoc = async(id) =>{
    try {
        //updateOne method it takes 2 parameters i.e (filter, whatToChange)
        const result = await MovieModel.deleteMany({ratings: 5}) 
        // result.forEach((m) => { 
        //     console.log(m.name)
        // })
    } catch (error) {
        console.log(error)
    }
}

// export {insertMany}
//  export {allDoc}
// export {updateDoc}
 export {deleteDoc}