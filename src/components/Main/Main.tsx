import React, { FormEvent, useState } from "react";

interface Props {
    searchForRecipe: (recipeSearch: string) => void;
}

const Main = (props: Props) => {

    let [Text, setText] = useState('');

    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const submitText = (event: FormEvent) => {
        event.preventDefault();
        props.searchForRecipe(Text);
        setText('');
    }

    return(
        <>
            <form onSubmit={submitText}>
                <input type="text"
                    value={Text}
                    onChange={changeText}
                    placeholder="Search..."
                    autoFocus
                />
            </form>
        </>
    );
}

export default Main;