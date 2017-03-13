import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'tiles-view',
    styleUrls: ['./tiles.view.scss'],
    templateUrl: './tiles.view.html'
})
export class TilesView implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'view-tile'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
