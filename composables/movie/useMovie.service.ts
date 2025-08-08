import { useFetchApi } from "../api/useFetchApi";

export const useMovieService = () => {
	const $fetch = useFetchApi();

	return async () => {
		try {
			const response = await $fetch("");
			return response;
		} catch (e) {
			console.error("Error in useMovieService: ", e);
			throw e;
		}
	};
};

export const useMovieDetailService = () => {
	const $fetch = useFetchApi();
	return async (id: number) => {
		try {
			const response = await $fetch("", { params: { action: "info", id } });
            return response;
		} catch (e) {
			console.error("Error in useMovieDetailService: ", e);
			throw e;
		}
	};
};
