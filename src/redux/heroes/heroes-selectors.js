// import { createSelector } from 'reselect';

export const getStateHeroes = state => state.heroes.heroes;
export const getisLoading = state => state.heroes.isLoading;
export const modalAddHero = state => state.heroes.modalAddHero;
export const getHeroById = state => state.heroes.heroes.heroId;
