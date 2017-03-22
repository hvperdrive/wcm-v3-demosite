import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'blogpost-page',
    styleUrls: ['./blogpost.page.scss'],
    templateUrl: './blogpost.page.html'
})
export class BlogPostPage implements OnInit {
    static selectComponent: Dynamic = {
        type: 'content', // view, partial, content
        contentType: 'blogpost',
        // If you would like to create a component for a specific blogpost you could use the slug or safelabel as well
        // The safelabel is more general since it's the same for all languages
        // safeLabel: 'pelorus_is_going_to_be_the_default_district_01_new_media_cms',
        // slug: 'pelorus-default-district01-cms'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
