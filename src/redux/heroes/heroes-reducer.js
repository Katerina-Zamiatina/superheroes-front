import { createSlice } from '@reduxjs/toolkit';

const initialHeroState = {
  nickname: null,
  realName: null,
  originDescription: null,
  superpowers: null,
  catchPhrase: null,
  img: null,
  modalAddHero: false,
  isLoading: false,
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'heroes',
  initialState: initialHeroState,
  reducers: {
    addHeroSuccess: (state, { payload }) => {
      state.heroes = [...state.heroes, payload];
      state.isLoading = false;
      state.error = null;
    },
    addHeroRequest: state => {
      state.isLoading = true;
    },
    addHeroError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    deleteHeroSuccess: (state, { payload }) => {
      state.heroes = state.heroes.filter(hero => hero._id !== payload);
      state.isLoading = false;
    },
    deleteHeroRequest: state => {
      state.isLoading = true;
    },
    deleteHeroError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});
