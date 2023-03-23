import React, {useState} from "react";
import { edamam, recipe } from "../../interfaces/EdamamRecipeInterface";
interface Props {
    recipesList: edamam | undefined
}

const RecipesList = (props: Props) => {

    let recipesArray: Array<{recipe: recipe}> | undefined  = props.recipesList?.hits

    let recipes = recipesArray?.map((rec, i) => {
        return(
            <>
                <h2>{rec.recipe.label}</h2>
                <img src={rec.recipe.image}/>
                <ul>
                    {rec.recipe.ingredients.map((ingredient, ind) => {
                        return(
                            <li key={ind}>{ingredient.text}</li>
                        )
                    })}
                </ul>
            </>)
    })

    return(
        <>
            {recipes}
        </>
    )
}

export default RecipesList;