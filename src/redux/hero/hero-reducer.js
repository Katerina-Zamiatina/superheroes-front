import { createSlice } from '@reduxjs/toolkit';

const initialHeroState = {
  nickname: null,
  realName: null,
  originDescription: null,
  superpowers: null,
  catchPhrase: null,
  img: null,
  isLoading: false,
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'hero',
  initialState: initialHeroState,
  reducers: {
    fetchHeroSuccess: (state, { payload }) => {
      state = payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchHeroRequest: state => {
      state.isLoading = true;
    },
    fetchHeroError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    updateHeroSuccess: (state, { payload }) => {
      state.heroes = state.heroes.filter(hero => hero._id === payload);
      state.isLoading = false;
    },
    updateHeroRequest: state => {
      state.isLoading = true;
    },
    updateHeroError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
