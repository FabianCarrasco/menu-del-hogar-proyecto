import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopMainScreen from './components/Main/TopMainScreen';
import SearchBarSection from './components/Main/SearchBarSection';
import RecipesList from './components/Main/RecipesList';
import { edamam } from './interfaces/EdamamRecipeInterface';

function App() {

  const [recipesList, setRecipesList] = useState<edamam|undefined>(undefined)
  return (
    <div className="App">
      <header className="App-header">
        <TopMainScreen/>
        <SearchBarSection setRecipesList={setRecipesList}/>
        <RecipesList recipesList={recipesList}/>
      </header>
    </div>
  );
}

export default App;
