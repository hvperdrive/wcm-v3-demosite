import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'tiles-view',
    styleUrls: ['./tiles.view.scss'],
    templateUrl: './tiles.view.html'
})
export class TilesView implements OnInit {
    static selectComponent: Dynamic = {
        type: 'view', // view, partial, content
        contentType: 'tile',
        viewReference: '38565bee-4d2d-426a-b815-2f5f864d88dd',
        viewType: 'tiles'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
