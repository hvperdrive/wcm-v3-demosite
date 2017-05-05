import { combineReducers } from 'redux';
import { LANGUAGE_REDUCER, LanguageState, INITIAL_LANGUAGE_STATE } from './language';

export interface AppState {
    settings: LanguageState
};

export const ROOT_REDUCER = combineReducers<AppState>({
    settings: LANGUAGE_REDUCER
});

export const INITIAL_STATE: AppState = {
    settings: INITIAL_LANGUAGE_STATE
};

export const STORE_MIDDLEWARE = [
];

export const ACTION_TYPES = {
};

export * from './store.module';
