import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'feature-view',
    styleUrls: ['./feature.view.scss'],
    templateUrl: './feature.view.html'
})
export class FeatureView implements OnInit {
    static selectComponent: Dynamic = {
        type: 'view', // view, partial, content
        contentType: 'feature',
        viewReference: '496e76c4-613b-41a9-b3ff-82cf3e325542',
        viewType: 'feature'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
