import express, {Express, Request, Response} from 'express';
import edamamRouter from './routes/edamam'
import spoonRouter from './routes/spoon'
import cors from 'cors'
import * as dotenv from 'dotenv';

dotenv.config()

const app: Express = express()
const port: number = process.env.PORT || 3000

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}))

app.get('/', (req, res) => {
    res.json({name: 'Hello from Express + TS!'})
})

app.use('/edamam', edamamRouter)
app.use('/spoon', spoonRouter)

app.listen(port, () => {
    console.log(`[server] now listening on port ${port}`)
})

