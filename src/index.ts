import express from 'express';
import dotenv from 'dotenv'
const dbConnect = require("./db/db");
// const todoRouter = require("./routes/todo.route")
import todoRouter from "./routes/todo.route"
const app = express();
dotenv.config();
const cors = require("cors");

dbConnect();

// let arr = db.collection.find();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/api',todoRouter);

app.listen(PORT,() => {
    console.log(`Server started at the port ${PORT}`);
})