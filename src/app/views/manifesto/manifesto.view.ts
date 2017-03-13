import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'manifesto-view',
    styleUrls: ['./manifesto.view.scss'],
    templateUrl: './manifesto.view.html'
})
export class ManifestoView implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'view-manifesto'
    };

    @Input()
    data: any;

    public ngOnInit() {
        console.log('ManifestoView initialized');
    }
}
