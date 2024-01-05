const API_KEY = process.env.REACT_APP_API_KEY;
export const basicUrl = "https://api.themoviedb.org";
export const imageUrl = "https://image.tmdb.org/t/p/w500";

export const getPopularUrl = () =>
    `${basicUrl}/3/movie/popular?api_key=${API_KEY}`;

export const getDetailUrl = (movieId: string) =>
    `${basicUrl}/3/movie/${movieId}?api_key=${API_KEY}`;
