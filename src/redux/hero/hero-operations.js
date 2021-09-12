import apiService from '../../service/apiService';
import { actions } from './hero-reducer';

const {
  fetchHeroError,
  fetchHeroRequest,
  fetchHeroSuccess,
  updateHeroError,
  updateHeroRequest,
  updateHeroImgSuccess,
  updateHeroImgError,
  updateHeroImgRequest,
  updateHeroSuccess,
} = actions;

export const fetchHeroById = heroId => async dispatch => {
  dispatch(fetchHeroRequest());
  try {
    const { data } = await apiService.fetchHeroById(heroId);
    dispatch(fetchHeroSuccess(data));
  } catch (error) {
    dispatch(fetchHeroError(error.message));
  }
};
