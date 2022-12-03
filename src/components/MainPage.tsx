import React, { useState } from "react";
import Search from "./Main/Search";

const MainPage: React.FC = () => {

    let [SearchRecipe, setsearch] = useState('');

    const searchedRecipe = (query: string) => {
        console.log(query);
        setsearch(query);
    }

    return (
        <>
            <div key={String(Date.now())}>
                <h1>{SearchRecipe}</h1>
                <Search searchedRecipe={searchedRecipe} />
            </div>
        </>
    );
}

export default MainPage;