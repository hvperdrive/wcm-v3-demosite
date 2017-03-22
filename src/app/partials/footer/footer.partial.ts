import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'footer-partial',
    styleUrls: ['./footer.partial.scss'],
    templateUrl: './footer.partial.html'
})
export class FooterPartial implements OnInit {
    static selectComponent: Dynamic = {
        type: 'partial', // view, partial, content
        contentType: 'footer',
        safeLabel: 'footer'
    };

    @Input()
    data: any;

    constructor(
        private translate: TranslateService
    ) {}

    public ngOnInit() {}

    setLanguage(lang) {
        this.translate.use(lang);
    }
}
