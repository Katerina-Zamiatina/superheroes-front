import axios from 'axios';

const BASE_URL = `https://superheroes-test.herokuapp.com/heroes`;
axios.defaults.baseURL = BASE_URL;

export const getHeroes = async currentPage => {
  try {
    const { data } = await axios.get('', {
      params: { page: currentPage, perPage: 5 },
    });
    const { heroes } = data;
    return heroes;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const getHeroById = async id => {
  try {
    const { data } = await axios.get(`/${id}`);
    const { hero } = data;
    return hero;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const addHero = async credentials => {
  try {
    const { data } = await axios.post('', credentials);
    const { hero } = data;
    return hero;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const deleteHero = async id => {
  try {
    await axios.delete(`/${id}`);
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const updateHero = async (id, credentials) => {
  try {
    const { data } = await axios.patch(`/${id}`, credentials);
    const { hero } = data;
    return hero;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const updateHeroImg = async (id, imgUrl) => {
  try {
    const { data } = await axios.patch(`/images/${id}`, imgUrl);
    const { hero } = data;
    return hero;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

// https://superheroes-test.herokuapp.com/heroes?page=0&perPage=5
