import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

// database config
const db = require('./config/default').mongoURI;

// connect to database
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("Mongo is here!"))
    .catch((err: any) => console.log(err));