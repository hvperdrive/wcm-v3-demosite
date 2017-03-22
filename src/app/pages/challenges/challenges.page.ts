import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'challenges-page',
    styleUrls: ['./challenges.page.scss'],
    templateUrl: './challenges.page.html'
})
export class ChallengesPage implements OnInit {
    static selectComponent: Dynamic = {
        type: 'content', // view, partial, content
        contentType: 'page',
        safeLabel: 'challenges',
        slug: 'challenges'
    };

    @Input()
    data: any;
    challenges: any;

    public ngOnInit() {
        this.challenges = this.data.fields.views[0].value;
    }
}
