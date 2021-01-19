const express = require('express');
const dotenv = require('dotenv');

/* Load config */
dotenv.config({ path: './config/config.env'})

const PORT: string | number = process.env.PORT || 8001;

/* App init */
const app = express();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

app.use(express.json());

/* Database connection start */
connectDB();