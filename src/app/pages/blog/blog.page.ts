import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'blog-page',
    styleUrls: ['./blog.page.scss'],
    templateUrl: './blog.page.html'
})
export class BlogPage implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'content-blog'
    };

    @Input()
    data: any;
    posts: any;

    public ngOnInit() {
        this.posts = this.data.fields.views[0].value;
    }
}
