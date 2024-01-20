import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzJkZGYxZmRkMDAxMDZhMzRlYjVjM2JkMmY5YTczZCIsInN1YiI6IjY1YTI1YTY4MWYwMjc1MDEyNzA4NDRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ac4NFsLxJQNplLAg9sb3NDpiGFl-X22G61YFTMJ0MRg',
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};