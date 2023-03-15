import express, {Express, Request, Response} from 'express'
import { ChildProcess } from 'child_process'

const edamamRouter = express.Router()
const edamamRoot = 'https://api.edamam.com'

edamamRouter.get('/', (req, res) => {
    console.log(req.socket.remoteAddress)
    res.send('Hello Edamam')
})

edamamRouter.get('/v2', (req, res) => {
    res.send('Hello Edamam V2')
})

edamamRouter.get('/:search', (req, res) => {
    res.json(req.recipesEdamam)
})

edamamRouter.get('/v2/:searchV2', (req, res) => {
    res.json(req.recipesEdamamV2)
})

edamamRouter.param('search', (req, res, next, search) => {
    fetch(`${edamamRoot}/search?q=${search}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`)
        .then(response => response.json())
        .then(response => {
            req.recipesEdamam = response
            next()
        })
})

edamamRouter.param('searchV2', (req, res, next, search) => {
    fetch(`${edamamRoot}/api/recipes/v2?q=${search}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
        .then(response => response.json())
        .then(response => {
            req.recipesEdamamV2 = response
            next()
        })
})

export default edamamRouter