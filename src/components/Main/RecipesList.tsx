import React, {useState} from "react";
import { edamam, recipe } from "../../interfaces/EdamamRecipeInterface";
interface Props {
    recipesList: edamam | undefined
}

const RecipesList = (props: Props) => {

    let recipesArray: Array<{recipe: recipe}> | undefined  = props.recipesList?.hits

    let recipes = recipesArray?.map((rec, i) => {
        return <h1>{rec.recipe.label}</h1>
    })

    return(
        <>
            {recipes}
            <h1>Hello World</h1>
        </>
    )
}

export default RecipesList;