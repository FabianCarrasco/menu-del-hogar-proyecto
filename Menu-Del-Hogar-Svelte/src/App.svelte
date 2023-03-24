<script lang="ts">
    import type { Edamam, EdamamV2, Recipes,  } from "./interfaces/Edamam";

    const ApiRoot = "http://fabiancarrasco.com:3000"
    let recipeList: Recipes[] = []

    let search: string = "";

    const searchRecipes = async () => {
        await fetch(`${ApiRoot}/edamam/v2/${search}`)
            .then(res => res.json())
            .then((data: EdamamV2) => {
                console.log(data)
                recipeList = data.hits
            })
    };
</script>

<main>
    <h1>Menú del Hogar</h1>
    <form on:submit|preventDefault={searchRecipes}>
        <input type="text" placeholder="Search for a recipe" bind:value={search}/>
        <button type="submit">Search</button>
    </form>
    {#each recipeList as recipe}
        <div class="recipe-card">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <p>{Math.ceil(recipe.recipe.calories)} calories</p>
            <a href={recipe.recipe.url}><button>Start Cooking!</button></a>
        </div>
    {:else}
        <h2>Search for recipes now!</h2>
    {/each}
</main>

<style>
    .recipe-card {
        width: 20rem;
        height: 30rem;
        background-color: #000;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 20px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>
