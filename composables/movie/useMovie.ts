import { useMovieService } from "./useMovie.service";

export const useMovieList = () => {
	const getMovieList = useMovieService();
	const { data, pending }: { data: Ref<any[]>; pending: Ref<boolean> } =
		useLazyAsyncData("movie-list", () => getMovieList());

	return {
		data,
		pending,
	};
};