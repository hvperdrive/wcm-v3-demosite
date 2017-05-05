import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { MenuService } from './services/menu.service';
import { ContentService } from './services/content.service';
import { Observable } from 'rxjs/Observable';

import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { SET_LANGUAGE } from './store/language';
import { LanguageActionCreator } from './store/language';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.scss'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public menu: Observable<any>;
    public footer: any;
    public getFooter: Observable<any>;

    constructor(
        public translateService: TranslateService,
        private menuService: MenuService,
        private contentService: ContentService,
        private ngRedux: NgRedux<AppState>,
        private languageActionCreator: LanguageActionCreator,
        // private router: Router,
        // private route: ActivatedRoute
    ) {
        languageActionCreator.setDefaultLanguage('en');
        languageActionCreator.setLanguage('nl');

        this.getContent(translateService.currentLang);

        translateService.onLangChange.subscribe((event: LangChangeEvent) => {
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
        // console.log(this.route.snapshot);
        // console.log(this.router.routerState.snapshot);
    }

    public getContent(lang) {
        this.menu = this.menuService.getMenu(lang);
        this.getFooter = this.contentService.getContentByUUID(lang, '2deb6077-71d6-4737-9df9-91927535ec4b');
    }
}
