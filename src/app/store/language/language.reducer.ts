import { SET_LANGUAGE, SET_DEFAULT_LANGUAGE } from './language.action-types';

export interface LanguageState {
    language: any;
}

export const INITIAL_LANGUAGE_STATE: LanguageState = {
    language: {
        default: '',
        current: ''
    }
}

export const LANGUAGE_REDUCER = (state = INITIAL_LANGUAGE_STATE, action) => {
    switch (action.type) {
        case SET_DEFAULT_LANGUAGE:
            return {...state,
                language: {...state.language,
                    default: action.lang
                }
            };

        case SET_LANGUAGE:
            return {...state,
                language: {...state.language,
                    current: action.lang
                }
            };

        default:
            return state;
    }
};
