const mongoose = require('mongoose')

const url =process.env.DB_URL;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(url,connectionParams)
  .then (()=>console.log("Connection establish"))
  .catch(()=>console.log("Connection error"))