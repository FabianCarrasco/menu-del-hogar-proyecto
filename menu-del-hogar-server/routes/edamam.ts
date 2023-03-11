import express, {Express, Request, Response} from 'express'

const edamamRouter = express.Router()

edamamRouter.get('/', (req, res) => {
    res.send('Hello Edamam')
})

export default edamamRouter