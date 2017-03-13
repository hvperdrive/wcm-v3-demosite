import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'manifesto-page',
    styleUrls: ['./manifesto.page.scss'],
    templateUrl: './manifesto.page.html'
})
export class ManifestoPage implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'content-manifesto'
    };

    @Input()
    data: any;
    manifesto: any;

    public ngOnInit() {
        this.manifesto = this.data.fields.views[0].value;
    }
}
