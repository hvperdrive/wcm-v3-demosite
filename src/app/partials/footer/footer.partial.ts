import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'footer-partial',
    styleUrls: ['./footer.partial.scss'],
    templateUrl: './footer.partial.html'
})
export class FooterPartial implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'partial-footer'
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
