import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {
    constructor(
        private http: Http
    ) {}

    getMenu(lang): Observable<any> {
        const url = `http://localhost:4000/api/1.0.0/menus/translated?lang=${lang}`;
        return this.http.get(url).map((res) => {
            const menu = res.json();
            return menu[0].items;
        });
    }
}
