import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'posts-view',
    styleUrls: ['./posts.view.scss'],
    templateUrl: './posts.view.html'
})
export class PostsView implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'view-blogpost'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
