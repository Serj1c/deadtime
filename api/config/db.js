const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false
        })
        console.log(`MongoDB is here! Host is ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB;