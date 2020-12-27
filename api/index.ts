import express, { Application, Request, Response } from 'express';

const app: Application = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('dead timer!')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
