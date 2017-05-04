import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import thunk from 'redux-thunk';

import { AppState, ROOT_REDUCER, INITIAL_STATE, STORE_MIDDLEWARE } from './index';

const DEVMODE = process.env.NODE_ENV === 'DEV';

@NgModule({
    imports: [
        NgReduxModule
    ],
    providers: [
        // list your injectable services (like actioncreators) here
    ]
})
export class StoreModule {
    constructor(
        private ngRedux: NgRedux<AppState>,
        private devTools: DevToolsExtension
    ) {
        const enhancers = DEVMODE && devTools.isEnabled() ? [ devTools.enhancer() ] : [];

        this.ngRedux.configureStore(ROOT_REDUCER, INITIAL_STATE, [
            thunk,
            ...STORE_MIDDLEWARE
        ], enhancers);
    }
}
