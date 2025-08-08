import { useFetchApi } from "../api/useFetchApi";

export const useMovieService = () => {
    const $fetch = useFetchApi();

    return async () => {
        try {
            const response = await $fetch('') 
            return response;
        } catch (e) {
            console.error('Error in useMovieService: ', e);
            throw e;
        }
    }
}
