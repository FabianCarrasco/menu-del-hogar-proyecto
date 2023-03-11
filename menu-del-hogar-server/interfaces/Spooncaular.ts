export interface ComplexSearch {
    results: {
        id: number,
        title: string,
        image: string,
        imageType: string,
    }[],
    offset: number,
    number: number,
    totalResults: number,
}
// RecipeInformation for the recipeInformation endpoint but 
// use RecipeInformation for the informationBulk endpoint: RecipeInformation[]
export interface RecipeInformation {
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    veryHealthy: boolean,
    cheap: boolean,
    veryPopular: boolean,
    sustainable: boolean,
    lowFodmap: boolean,
    weightWatcherSmartPoints: number,
    gaps: string,
    preparationMinutes: number,
    cookingMinutes: number,
    aggregateLikes: number,
    healthScore: number,
    creditsText: string,
    license: string,
    sourceName: string,
    pricePerServing: string,
    extendedIngredients: {
        id: number,
        aisle: string,
        image: string,
        consistency: string,
        name: string,
        nameClean: string,
        original: string,
        originalName: string,
        amount: number,
        unit: string,
        meta: string[],
        measures: {
            us: {
                amount: number,
                unitShort: string,
                unitLong: string,
            },
            metric: {
                amount: number,
                unitShort: string,
                unitLong: string,
            }
        }
    }[],
    id: number,
    title: number,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string,
    image: string,
    imageType: string,
    summary: string,
    cuisines: string[],
    dishTypes: string[],
    diets: string[],
    occasions: string[],
    winePairing: {
        pairedWines: string[],
        pairingText: string,
        productMatches: {
            id: number,
            title: string,
            description: string,
            price: string,
            imageUrl: string,
            averageRating: number,
            ratingCount: number,
            score: number,
            link: string,
        }[],
    },
    instructions: string,
    analyzedInstructions: {
        name: string,
        steps: {
            number: number,
            step: string,
            ingredients: {
                id: number,
                name: string,
                localizedName: string,
                image: string,
            }[],
            equipment: {
                id: number,
                name: string,
                localizedName: string,
                image: string,
            }[],
        }[],
    }[],
    originalId: number | undefined,
    spoonacularSourceUrl: string,
}

// Extend interface with any extra nutrient the search is expanded by
// Array of objects is returned so use FindByNutrients[]
export interface FindByNutrients {
    id: number,
    title: string,
    image: string,
    imageType: string,
    calories: number,
    protein: string,
    fat: string,
    carbs: string,
}

// Array of objects is returned so use FindByIngredients[]
export interface FindByIngredients {
    id: number,
    title: string,
    image: string,
    imageType: string,
    usedIngredientCount: number,
    missedIngredientCount: number,
    missedIngredients: {
        id: number,
        amount: number,
        unit: string,
        unitLong: string,
        unitShort: string,
        aisle: string,
        name: string,
        original: string,
        originalName: string,
        meta: string[],
        image: string,
    }[],
    usedIngredients: {
        id: number,
        amount: number,
        unit: string,
        unitLong: string,
        unitShort: string,
        aisle: string,
        name: string,
        original: string,
        originalName: string,
        meta: string[],
        image: string,
    }[],
    unusedIngredients: {
        id: number,
        amount: number,
        unit: string,
        unitLong: string,
        unitShort: string,
        aisle: string,
        name: string,
        original: string,
        originalName: string,
        meta: string[],
        image: string,
    }[],
    likes: number,
}

// Endpoint returns an array
export interface SimilarRecipes {
    id: number,
    imageType: string,
    title: string,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string,
}

export interface Autocomplete {
    id: number,
    title: string,
    imageType: string,
}

export interface Taste {
    sweetness: number,
    saltiness: number,
    sourness: number,
    bitterness: number,
    savoriness: number,
    fattiness: number,
    spiciness: number,
}

export interface Equipment {
    equipment: {
        image: string,
        name: string,
    }[],
}

export interface PriceBreakdown {
    ingredients: {
        name: string,
        image: string,
        price: number,
        amount: {
            metric: {
                value: number,
                unit: string,
            },
            us: {
                value: number,
                unit: string,
            },
        },
    }[],
    totalCost: number,
    totalCostPerServing: number,
}

export interface Ingredients {
    ingredients: {
        name: string,
        image: string,
        amount: {
            metric: {
                value: number,
                unit: string,
            },
            us: {
                value: number,
                unit: string,
            },
        },
    }[],
}

export interface Nutrition {
    calories: string,
    carbs: string,
    fat: string,
    protein: string,
    bad: {
        title: string,
        amount: string,
        indented: boolean,
        percentOfDailyNeeds: number,
    }[],
    good: {
        title: string,
        amount: string,
        indented: boolean,
        percentOfDailyNeeds: number,
    }[],
    expires: number,
    isStale: boolean,
}

// Endpoint returns an array
export interface AnalizedInstructions {
    name: string,
    steps: {
        number: number,
        step: string,
        ingredients: {
            id: number,
            name: string,
            localizedName: string,
            image: string,
        }[],
        equipment: {
            id: number,
            name: string,
            localizedName: string,
            image: string,
        }[],
    }[]
}

export interface Summary {
    id: number,
    title: string,
    summary: string,
}

export interface AnalyzeQuery {
    ingredients: {
        name: string,
        include: boolean,
    }[],
    dishes: {
        name: string,
        image: string,
    }[],
    modifiers: {
        name: string,
    }[],
    cuisines: any[],
}

export interface GuessNutrition {
    recipesUsed: number,
    calories: {
        value: number,
        unit: string,
        confidenceRange95Percent: {
            min: number,
            max: number,
        },
        standardDeviation: number,
    },
    fat: {
        value: number,
        unit: string,
        confidenceRange95Percent: {
            min: number,
            max: number,
        },
        standardDeviation: number,
    },
    protein: {
        value: number,
        unit: string,
        confidenceRange95Percent: {
            min: number,
            max: number,
        },
        standardDeviation: number,
    },
    carbs: {
        value: number,
        unit: string,
        confidenceRange95Percent: {
            min: number,
            max: number,
        },
        standardDeviation: number,
    },
}