import mongoose from 'mongoose';
const config = require('./URI.ts');

const uri = config.mongoURI;

mongoose.set('useCreateIndex', true);

const db: Promise<typeof mongoose> = mongoose.connect('mongodb://mongo:27017/dead-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

db.then(fullfilled => {
    console.log("mongo is here! damn!")
}).catch(err => {
    console.error(err)
});