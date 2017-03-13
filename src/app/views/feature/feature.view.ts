import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'feature-view',
    styleUrls: ['./feature.view.scss'],
    templateUrl: './feature.view.html'
})
export class FeatureView implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'view-feature'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
