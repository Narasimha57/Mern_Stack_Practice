import express from 'express';
import connectDB from './db/connectDB.js';
// import {insertMany} from './models/Movies.js';
// import {allDoc} from './models/Movies.js';
//  import {updateDoc} from './models/Movies.js';
import {deleteDoc} from './models/Movies.js';
const app = express();
const port = process.env.PORT || 8000;
const DATABSE_URL = process.env.DATABSE_URL ||'mongodb://127.0.0.1:27017'

connectDB(DATABSE_URL);
// allDoc();
// insertMany();
// updateDoc();
deleteDoc();
app.listen(port, ()=>console.log(`Server Listening on ${port}`));