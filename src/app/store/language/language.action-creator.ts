import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { bindActionCreators } from 'redux';
import { TranslateService } from '@ngx-translate/core';

import { AppState } from '../index';
import { actionWithDeps } from '../store-utils';
import * as actions from './language.actions';

@Injectable()
export class LanguageActionCreator {
    public setLanguage: Function;
    public setDefaultLanguage: Function;

    constructor(
        private ngRedux: NgRedux<AppState>,
        private translateService: TranslateService,
    ) {
        /* tslint:disable:max-line-length */
        this.setLanguage = bindActionCreators(actionWithDeps(actions.setLanguage, this.translateService), this.ngRedux.dispatch);
        this.setDefaultLanguage = bindActionCreators(actionWithDeps(actions.setDefaultLanguage, this.translateService), this.ngRedux.dispatch);
        /* tslint:enable:max-line-length */
    }
}
