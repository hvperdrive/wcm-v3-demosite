import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'manifesto-view',
    styleUrls: ['./manifesto.view.scss'],
    templateUrl: './manifesto.view.html'
})
export class ManifestoView implements OnInit {
    static selectComponent: Dynamic = {
        type: 'view', // view, partial, content
        contentType: 'manifesto',
        viewReference: '2b18aa00-253c-4074-ac05-38aac53f6002',
        viewType: 'manifesto'
    };

    @Input()
    data: any;

    public ngOnInit() {
        console.log('ManifestoView initialized');
    }
}
