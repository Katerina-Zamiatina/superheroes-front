import apiService from '../../service/apiService';
import { actions } from './heroes-reducer';

const {
  addHeroSuccess,
  addHeroRequest,
  addHeroError,
  downloadHeroesError,
  downloadHeroesSuccess,
  downloadHeroesRequest,
} = actions;

export const downloadHeroes = () => async dispatch => {
  dispatch(downloadHeroesRequest());
  try {
    const { data } = await apiService.getHeroes();
    console.log(data);
    dispatch(downloadHeroesSuccess(data));
  } catch (error) {
    dispatch(downloadHeroesError(error.message));
    // dispatch(downloadHeroesSuccess([]));
  }
};
