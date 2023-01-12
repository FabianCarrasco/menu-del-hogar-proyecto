import { defaultMaxListeners } from "events";
import React, { FormEvent, useState } from "react";
import { edamam } from "../../interfaces/EdamamRecipeInterface";
import { URL, Options } from "../../keys/EdamamApiKey";

interface Props {
    setRecipesList: (value: edamam | undefined | ((prevVar: edamam | undefined) => edamam)) => void
}

const SearchBarSection = (props: Props) => {
    const setRecipesList = props.setRecipesList
    const [searchString, setSearchString] = useState<string>('')
    const search = (e: FormEvent) => {
        e.preventDefault()
        const submittedSearchString = searchString
        setSearchString('')
        if(submittedSearchString == ''){
            return;
        }
        fetch(URL + `q=${searchString}`, Options)
            .then(response => response.json())
            .then(data => {
                setRecipesList(data)
            })
            .catch((err) => console.log("Error, ", err))
    }

    const handleSearchTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchString(e.currentTarget.value)
    }
    
    return(
        <form onSubmit={search}>
            <input type="text"
                   placeholder="Search for recipes..."
                   value={searchString}
                   onChange={handleSearchTextChange}/>
            <input type="submit" value="Search Recipes"/>
        </form>
    )
}

export default SearchBarSection;