import { createSlice } from '@reduxjs/toolkit';

const initialHeroesState = {
  heroes: [],
  // nickname: null,
  // realName: null,
  // originDescription: null,
  // superpowers: null,
  // catchPhrase: null,
  // img: null,
  isLoading: false,
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'heroes',
  initialState: initialHeroesState,
  reducers: {
    downloadHeroesSuccess: (state, { payload }) => {
      state.heroes = payload;
      state.isLoading = false;
      state.error = null;
    },
    downloadHeroesRequest: state => {
      state.isLoading = true;
    },
    downloadHeroesError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

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

    // updateHeroSuccess: (state, { payload }) => {
    //   state.heroes = state.heroes.filter(hero => hero._id === payload);
    //   state.isLoading = false;
    // },
    // updateHeroRequest: state => {
    //   state.isLoading = true;
    // },
    // updateHeroError: (state, { payload }) => {
    //   state.error = payload;
    //   state.isLoading = false;
    // },

    getHeroByIdSuccess: (state, { payload }) => {
      state.heroes = state.heroes.filter(hero => hero._id === payload);
      state.isLoading = false;
    },
    getHeroByIdRequest: state => {
      state.isLoading = true;
    },
    getHeroByIdError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
