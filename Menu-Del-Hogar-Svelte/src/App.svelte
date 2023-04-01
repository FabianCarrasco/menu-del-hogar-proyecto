<script lang="ts">
    import type { Edamam, EdamamV2, Recipes,  } from "./interfaces/Edamam";
    import {Jumper, BarLoader, Chasing, Circle, Circle3} from 'svelte-loading-spinners'
    import PSA from "./components/PSA.svelte";
    const ApiRoot = "https://fabiancarrasco.com/api"
    let recipeList: Recipes[] = []
    let start: boolean = true
    let search: string = "";

    const searchRecipes = async () => {
        start = false
        recipeList = []
        await fetch(`${ApiRoot}/edamam/v2/${search}`)
            .then(res => res.json())
            .then((data: EdamamV2) => {
                console.log(data)
                recipeList = data.hits
            })
        search = ""
    };
</script>

<main>
    <PSA/>
    <h1>Menú del Hogar</h1>
    <form on:submit|preventDefault={searchRecipes}>
        <input type="text" placeholder="Search for a recipe" bind:value={search}/>
        <button type="submit">Search</button>
    </form>
    <div class="content">
        {#each recipeList as recipe}
            <div class="recipe-card">
                <h2>{recipe.recipe.label}</h2>
                <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                <p>{Math.ceil(recipe.recipe.calories)} calories</p>
                <a href={recipe.recipe.url}><button>Start Cooking!</button></a>
            </div>
        {:else}
            {#if start}
                <p>Search recipes now!</p>
            {:else}
                <div class="loader">
                    <Circle/>
                </div>
            {/if}
        {/each}

    </div>
    
</main>

<style>
    .content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
    .recipe-card {
        width: 20rem;
        height: auto;
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
    .loader {
        margin-top: 3rem;
        margin-left: auto;
        margin-right: auto;
    }
</style>
