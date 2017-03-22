import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'home-page',
    styleUrls: ['./home.page.scss'],
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
    static selectComponent: Dynamic = {
        type: 'content', // view, partial, content
        contentType: 'page',
        safeLabel: 'home',
        slug: 'home'
    };

    @Input()
    data: any;
    views: any;

    public ngOnInit() {
        this.views = this.data.fields.views;
    }
}
