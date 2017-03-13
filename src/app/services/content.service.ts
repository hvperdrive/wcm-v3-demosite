import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentService {
    constructor(
        private http: Http
    ) {}

    getContentBySlug(lang, content): Observable<any> {
        const url = `http://localhost:4000/api/1.0.0/content?slug=${content}&lang=${lang}&populate=true`;
        return this.http.get(url).map((res) => res.json());
    }

    getContentByUUID(lang, content): Observable<any> {
        const url = `http://localhost:4000/api/1.0.0/content?uuid=${content}&lang=${lang}&populate=true`;
        return this.http.get(url).map((res) => res.json());
    }
}
