import express, {Express, Request, Response} from 'express'

const edamamRouter = express.Router()

edamamRouter.get('/', (req, res) => {
    res.send('Hello Edamam')
})

edamamRouter.get('/v2', (req, res) => {
    res.send('Hello Edamam V2')
})

export default edamamRouter