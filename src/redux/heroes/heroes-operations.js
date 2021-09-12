import apiService from '../../service/apiService';
import { actions } from './heroes-reducer';

const {
  // addHeroSuccess,
  // addHeroRequest,
  // addHeroError,
  downloadHeroesError,
  downloadHeroesSuccess,
  downloadHeroesRequest,
  getHeroByIdError,
  getHeroByIdSuccess,
  getHeroByIdRequest,
} = actions;

export const downloadHeroes = () => async dispatch => {
  dispatch(downloadHeroesRequest());
  try {
    const { data } = await apiService.getHeroes();
    dispatch(downloadHeroesSuccess(data));
  } catch (error) {
    dispatch(downloadHeroesError(error.message));
    // dispatch(downloadHeroesSuccess([]));
  }
};

export const fetchHeroById = heroId => async dispatch => {
  dispatch(getHeroByIdRequest());
  try {
    const { data } = await apiService.getHeroById(heroId);
    dispatch(getHeroByIdSuccess(data));
  } catch (error) {
    dispatch(getHeroByIdError(error.message));
  }
};
