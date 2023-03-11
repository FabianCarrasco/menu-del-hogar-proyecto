import express, {Express, Request, Response} from 'express';
import edamamRouter from './routes/edamam'
import spoonRouter from './routes/spoon'

import * as dotenv from 'dotenv';

dotenv.config()

const app: Express = express()
const port: number = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello from Express + TS!')
})

app.listen(port, () => {
    console.log(`[server] now listening on port ${port}`)
})

