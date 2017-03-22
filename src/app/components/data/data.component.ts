import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-data',
    template: '<app-dynamic-load [componentData]="data" type="content"></app-dynamic-load>',
    styles:  [':host { display: block; }']
})
export class DataComponent {
    data: any;

    constructor(private route: ActivatedRoute) {
        route.data.subscribe(
            (res: any) => {
                this.data = res.data;
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
