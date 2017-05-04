import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { MenuService } from './services/menu.service';
import { ContentService } from './services/content.service';
import { Observable } from 'rxjs/Observable';

import { NgRedux, select } from '@angular-redux/store';
// import { AppState, LangActions } from './store';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.scss'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    menu: Observable<any>;
    footer: any;
    getFooter: Observable<any>;
    @select() readonly language$: Observable<string>;

    constructor(
        public translate: TranslateService,
        private menuService: MenuService,
        private contentService: ContentService,
        // private ngRedux: NgRedux<AppState>,
        // private langActions: LangActions
    ) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('nl');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('nl');
        this.getContent(translate.currentLang);

        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.getContent(event.lang);
        });
    }

    public ngOnInit() {
        this.getFooter.subscribe(
            (res) => {
                this.footer = res;
            },
            (err) => {
                console.log('an error occured when fetching the content for the footer');
            }
        );
    }

    getContent(lang) {
        this.menu = this.menuService.getMenu(lang);
        this.getFooter = this.contentService.getContentByUUID(lang, '2deb6077-71d6-4737-9df9-91927535ec4b');
    }

    setLanguage(lang) {
        // this.ngRedux.dispatch(this.langActions.set());
    }
}
