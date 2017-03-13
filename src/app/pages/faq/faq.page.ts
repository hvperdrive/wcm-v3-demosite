import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'faq-page',
    styleUrls: ['./faq.page.scss'],
    templateUrl: './faq.page.html'
})
export class FAQPage implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'content-faq'
    };

    @Input()
    data: any;
    faq: any;

    public ngOnInit() {
        this.faq = this.data.fields.views[0].value;
    }
}
