import React, { FormEvent, useState } from "react";

interface Props {
    searchedRecipe: (query: string) => void;
}

const Search = (props: Props) => {

    let [Text, settext] = useState('');
    let [Query, setquery] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if(Text == ''){
            return
        }
        setquery(Text);
        sendQueryToParent(Text);
        settext('');
    }

    const sendQueryToParent = (query: string) => {
        props.searchedRecipe(query);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        settext(event.target.value);
    }

    return (
        <>
            <div className="search-recipe">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={Text}
                        onChange={handleChange}
                        autoFocus/>
                </form>
            </div>
        </>
    );
}

export default Search;