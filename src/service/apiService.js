import axios from 'axios';

const BASE_URL = `https://superheroes-test.herokuapp.com`;
axios.defaults.baseURL = BASE_URL;

const apiService = {
  getHeroes(page, perPage = 5) {
    return axios.get(`/heroes?${page}&${perPage}`);
  },

  getHeroById(id) {
    return axios.get(`/heroes/${id}`);
  },

  addHero(credentials) {
    return axios.post(`/heroes`);
  },
};

export default apiService;

// https://superheroes-test.herokuapp.com/heroes?page=0&perPage=5
