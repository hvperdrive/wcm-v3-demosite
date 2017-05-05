import { TranslateService } from '@ngx-translate/core';

import * as actionTypes from './language.action-types';

export function setLanguage(translateService: TranslateService, language) {
    translateService.use(language);

    return {
        type: actionTypes.SET_LANGUAGE,
        lang: language
    };
}

export function setDefaultLanguage(translateService: TranslateService, language) {
    translateService.setDefaultLang(language);

    return {
        type: actionTypes.SET_DEFAULT_LANGUAGE,
        lang: language
    };
}
