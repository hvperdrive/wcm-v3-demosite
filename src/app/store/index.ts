import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class LangActions {
    static SET = 'SET';

    set(): Action {
        return { type: LangActions.SET };
    }
}

export interface IAppState {
    lang: string;
};

export const INITIAL_STATE: IAppState = { lang: 'nl' };

export function rootReducer (state: IAppState, action: Action): IAppState {
    switch (action.type) {
        case LangActions.SET: return { lang: state.lang };
    }

    return state;
};
