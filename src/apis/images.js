import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'pAEouZcfIjwAylXEegT3seeJ5uAtN9-lmD29z0VLQIw';
const PER_PAGE = 30;

export const fetchImages = async (searchValue, pageValue) => {
  try {
    const res = await axios.get(
      `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`,
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
