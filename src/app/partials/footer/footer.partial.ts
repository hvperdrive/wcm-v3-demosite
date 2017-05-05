import { Component, Input } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

import { Dynamic } from 'wcm-template-manager-ng2';

import { LanguageActionCreator } from '../../store/language';

@Component({
    selector: 'footer-partial',
    styleUrls: ['./footer.partial.scss'],
    templateUrl: './footer.partial.html'
})
export class FooterPartial {
    static selectComponent: Dynamic = {
        type: 'partial', // view, partial, content
        contentType: 'footer',
        safeLabel: 'footer'
    };

    @Input() data: any;

    constructor(
        public languageActionCreator: LanguageActionCreator,
        // private router: Router,
        // private route: ActivatedRoute
    ) {}

    public setLanguage(lang) {
        this.languageActionCreator.setLanguage(lang);

        // this.route.params.subscribe((params) => {
        //     console.log(params);
        // })

        // console.log(this.route.snapshot.params);
    }
}
