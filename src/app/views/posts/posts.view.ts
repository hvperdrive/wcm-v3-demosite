import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'posts-view',
    styleUrls: ['./posts.view.scss'],
    templateUrl: './posts.view.html'
})
export class PostsView implements OnInit {
    static selectComponent: Dynamic = {
        type: 'view', // view, partial, content
        contentType: 'blogpost',
        // Since this view is shared on several pages, it's best to not specify it too much
        // These would be the possible references and types if you'd want to specify
        // viewReference: '531f72a8-2ee2-4ea4-89b6-5b80c76d3c36', // For the view on the homepage
        // viewReference: '165c228c-ac44-4bb9-be1e-a7ad6b88c07a' // For the view on the blogpage
        // viewType: 'last_three_blogposts' // For the view on the homepage
        // viewType: 'blog' // For the view on the blogpage
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
