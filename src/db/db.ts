const  mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

async function dbConnect() {
    mongoose.connect(mongoUrl).then(() => {
            console.log("DB Connected")
        }).catch((err:any) => {
            console.log(err,"error");
        })
}

module.exports = dbConnect;