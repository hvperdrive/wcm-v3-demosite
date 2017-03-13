import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'home-page',
    styleUrls: ['./home.page.scss'],
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'content-home'
    };

    @Input()
    data: any;
    views: any;

    public ngOnInit() {
        this.views = this.data.fields.views;
    }
}
