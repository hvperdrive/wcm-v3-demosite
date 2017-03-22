import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'faq-view',
    styleUrls: ['./faq.view.scss'],
    templateUrl: './faq.view.html'
})
export class FAQView implements OnInit {
    static selectComponent: Dynamic = {
        type: 'view', // view, partial, content
        contentType: 'faq',
        viewReference: '90b886dd-effd-4909-a3ff-309799e43219',
        viewType: 'faq'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
