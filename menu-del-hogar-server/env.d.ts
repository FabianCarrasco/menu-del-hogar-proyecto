declare global {
    namespace NodeJS {
        interface ProcessEnv{
            HOST: string,
            PORT: number,
            EDAMAM_APP_ID: string,
            EDAMAM_API_KEY: string,
            SPOONACULAR_API_KEY: string,
        }
    }
}

export {}