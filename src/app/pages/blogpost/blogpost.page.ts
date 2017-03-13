import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'blogpost-page',
    styleUrls: ['./blogpost.page.scss'],
    templateUrl: './blogpost.page.html'
})
export class BlogPostPage implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'content-blogpost'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
