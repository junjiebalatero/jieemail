const mongoose = require('mongoose');
require('dotenv').config();
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

const uri = "mongodb+srv://junjie:8LETN2GxF98lZ2It@junjie-mern.p63jc.mongodb.net/jieBlog?retryWrites=true&w=majority"
const connexion = mongoose.connect(uri, connectionParams).then(() => console.log('connected to cloud atlas'))
.catch((err) => console.log(err));

module.exports = connexion