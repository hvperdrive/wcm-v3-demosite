import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ContentService } from './content.service';

@Injectable()
export class ContentResolver implements Resolve<any[]> {
    constructor(
        private contentService: ContentService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any[]> {
        let getContent;
        if (state.url === '/home') {
            getContent = this.contentService.getContentBySlug(
                 'en',
                 '96d59d8d-35f3-4733-811b-2a18c24b4058'
            );
        } else {
            getContent = this.contentService.getContentBySlug(
                route.params['lang'],
                route.params['content']
            );
        }
        return getContent;
    }
}
