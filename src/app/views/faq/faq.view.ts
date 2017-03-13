import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'faq-view',
    styleUrls: ['./faq.view.scss'],
    templateUrl: './faq.view.html'
})
export class FAQView implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'view-faq'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
