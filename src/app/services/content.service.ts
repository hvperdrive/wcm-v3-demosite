import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentService {
    private currentLang: string;

    constructor(
        private http: Http
    ) {}

    getContentBySlug(lang, content): Observable<any> {
        const url = `/proxy/content?slug=${content}&lang=${lang}&populate=true`;
        return this.http.get(url).map((res) => res.json());
    }

    getContentByUUID(lang, content): Observable<any> {
        const url = `/proxy/content?uuid=${content}&lang=${lang}&populate=true`;
        return this.http.get(url).map((res) => res.json());
    }
}
