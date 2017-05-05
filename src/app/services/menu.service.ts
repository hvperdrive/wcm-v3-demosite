import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {
    private apiKey = '000-000';
    private tenant = 'example-website';

    constructor(
        private http: Http
    ) {}

    getMenu(lang): Observable<any> {
        const url = `/proxy/menus/translated?lang=${lang}`;
        return this.http.get(url).map((res) => {
            const menu = res.json();
            return menu[0].items;
        });
    }
}
