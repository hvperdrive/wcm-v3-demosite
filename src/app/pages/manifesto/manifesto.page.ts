import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'manifesto-page',
    styleUrls: ['./manifesto.page.scss'],
    templateUrl: './manifesto.page.html'
})
export class ManifestoPage implements OnInit {
    static selectComponent: Dynamic = {
        type: 'content', // view, partial, content
        contentType: 'page',
        safeLabel: 'manifesto',
        slug: 'manifesto'
    };

    @Input()
    data: any;
    manifesto: any;

    public ngOnInit() {
        this.manifesto = this.data.fields.views[0].value;
    }
}
