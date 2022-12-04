import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';

function App() {

  let [search, setSearch] = useState('');

  const searchForRecipe = (recipeSearch: string) => {
    setSearch(recipeSearch);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{search}</h1>
        <Main searchForRecipe={searchForRecipe}/>
      </header>
    </div>
  );
}

export default App;
