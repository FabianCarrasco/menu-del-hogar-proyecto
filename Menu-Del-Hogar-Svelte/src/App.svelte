<script lang="ts">
    import type { Edamam, EdamamV2 } from "./interfaces/Edamam";

    const ApiRoot = "http://fabiancarrasco.com:3000"

    let search: string = "";

    const searchRecipes = async () => {
        console.log("Vergaaa!")
        await fetch(`${ApiRoot}/edamam/v2/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
</script>

<main>
    <h1>Menu del Hogar</h1>
    <form on:submit|preventDefault={searchRecipes}>
        <input type="text" placeholder="Search for a recipe" bind:value={search}/>
        <button type="submit">Search</button>
    </form>
</main>

<style>
</style>
