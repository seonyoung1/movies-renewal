import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: '6f26edc26d6ed9d164d9bc332258be3f',
		language: 'ko',
	},
});

export const moviesApi = {
	nowPlaying: (page) =>
		api.get('movie/now_playing', {
			params: {
				page: page,
			},
		}),
	popular: (page) =>
		api.get('movie/popular', {
			params: {
				page: page,
			},
		}),
	search: (term) =>
		api.get('search/movie', {
			params: {
				query: term,
			},
		}),
	movieDetail: (id) =>
		api.get(`movie/${id}&append_to_response=videos`, {
			params: {
				append_to_response: 'videos',
			},
		}),
};
