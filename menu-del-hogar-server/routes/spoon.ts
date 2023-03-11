import express, {Express, Request, response, Response} from 'express'
import {AnalizedInstructions, RecipeInformation} from '../interfaces/Spooncaular'
import * as dotenv from 'dotenv'

interface AnalyzedRecipe {
    information: RecipeInformation,
    instructions: AnalizedInstructions,
}

dotenv.config()

const spoonRouter = express.Router()
const spoonRoot = 'https://api.spoonacular.com'

spoonRouter.route('/:id')
    .get((req, res) => {

    })
    .put((req,res) => {

    })
    .delete((req, res) => {

    })

spoonRouter.param('id', async (req, res, next, id) => {
    let recInformation: RecipeInformation | undefined
    let recInstructions: AnalizedInstructions | undefined
    let recResponse: AnalyzedRecipe | undefined 

    async function getInformation() {
        return fetch(`${spoonRoot}/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                recInformation = response
            })
            .catch(() => console.log("Error, instructions could not be fetched."))
    }

    async function getInstructions() {
        return fetch(`${spoonRoot}/recipes/${id}/analyzedInstructions?apiKey=${process.env.SPOONACULAR_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                recInstructions = response
            })
            .catch(() => console.log("Error, instructions could not be fetched."))
    }

    await getInformation()
    await getInstructions()

    req.recipe = {
        information: recInformation,
        instructions: recInstructions,
    }

    next()
})

export default spoonRouter