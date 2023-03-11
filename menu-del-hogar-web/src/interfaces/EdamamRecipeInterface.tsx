export interface ingredients{
    text: string,
    weight: number,
    foodCategory: string,
    foodId: string,
    image: string
}

export interface Nutrient{
    label: string,
    quantity: number,
    unit: string
}

export interface Net{
    label: string,
    quantity: number,
    unity: string,
    net: Nutrient,
    added: Nutrient,
    alcohol: Nutrient
}

export interface totalNutrients{
    ENERC_KCAL: Nutrient,
    FAT: Nutrient,
    FASAT: Nutrient,
    FATRN: Nutrient,
    FAMS: Nutrient,
    FAPU: Nutrient,
    CHOCDF: Net,
    FIBTG: Nutrient,
    SUGAR: Net,
    PROCNT: Nutrient,
    CHOLE: Nutrient,
    NA: Nutrient,
    CA: Nutrient,
    MG: Nutrient,
    K: Nutrient,
    FE: Nutrient,
    ZN: Nutrient,
    P: Nutrient,
    VITA_RAE: Nutrient,
    VITC: Nutrient,
    THIA: Nutrient,
    RIBF: Nutrient,
    NIA: Nutrient,
    VITB6A: Nutrient,
    FOLDFE: Nutrient,
    FOLFD: Nutrient,
    FOLAC: Nutrient,
    VITB12: Nutrient,
    VITD: Nutrient,
    TOCPHA: Nutrient,
    VITK1: Nutrient,
    WATER: Nutrient
}


export interface totalDaily{
    ENERC_KCAL: Nutrient,
    FAT: Nutrient,
    FASAT: Nutrient,
    CHOCDF: Nutrient,
    FIBTG: Nutrient,
    PROCNT: Nutrient,
    CHOLE: Nutrient,
    NA: Nutrient,
    CA: Nutrient,
    MG: Nutrient,
    K: Nutrient,
    FE: Nutrient,
    ZN: Nutrient,
    P: Nutrient,
    VITA_RAE: Nutrient,
    VITC: Nutrient,
    THIA: Nutrient,
    RIBF: Nutrient,
    NIA: Nutrient,
    VITB6A: Nutrient,
    FOLDFE: Nutrient,
    VITB12: Nutrient,
    VITD: Nutrient,
    TOCPHA: Nutrient,
    VITK1: Nutrient
}

export interface digest{
    label: string,
    tag: string,
    schemeOrgTag: string,
    total: number,
    hasRDI: boolean,
    daily: number,
    unit: string,
    sub: digest[]
}

export interface recipe{
    uri: string,
    label: string,
    image: string,
    source: string,
    url: string,
    shareAs: string,
    yield: number,
    dietLabels: string[],
    healthLabels: string[],
    cautions: string[],
    ingredientLines: string[],
    ingredients: ingredients[],
    calories: number,
    totalWeight: number,
    totalTime: number,
    cuisineType: string[],
    mealType: string[],
    dishType: string[],
    totalNutriends: totalNutrients,
    totalDaily: totalDaily,
    digest: digest[]
}

export interface edamam{
    q: string,
    from: number,
    to: number,
    more: boolean,
    count: number
    hits: Array<{
        recipe: recipe
    }>
}