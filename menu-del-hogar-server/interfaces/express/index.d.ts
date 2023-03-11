import {AnalizedInstructions, RecipeInformation } from "../Spooncaular"
import {Edamam, EdamamV2} from "../Edamam"

declare global {
    namespace Express {
        export interface Request {
            recipe: {
                information?: RecipeInformation,
                instructions?: AnalizedInstructions,
            },
            recipesEdamam?: EdamamV2,
            recipesEdamamV2?: Edamam,
        }
    }
}