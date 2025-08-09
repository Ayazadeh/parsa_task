import { useMovieDetailService } from "./useMovie.service";

export const useMovieDetail = (id: number) => {
	if (!id) throw new Error("id is missing");

	const getMovieDetail = useMovieDetailService();
	const {
		data,
		pending,
		error,
	}: { data: Record<string, any>; pending: any; error: any } =
		useLazyAsyncData(`movie-detail-${id}`, () => getMovieDetail(id));

	return {
		data,
		pending,
		error,
	};
};
