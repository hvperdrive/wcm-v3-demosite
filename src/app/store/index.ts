import { combineReducers } from 'redux';
import { TRANSLATIONS_REDUCER } from './translations';

export interface AppState {
    language: any;
};

export const ROOT_REDUCER = combineReducers<AppState>({
    language: TRANSLATIONS_REDUCER
});

export const INITIAL_STATE: AppState = {
    language: 'en'
};

export const STORE_MIDDLEWARE = [
];

export const ACTION_TYPES = {
};

export * from './store.module';
