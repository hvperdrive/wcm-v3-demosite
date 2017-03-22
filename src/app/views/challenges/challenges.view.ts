import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'challenges-view',
    styleUrls: ['./challenges.view.scss'],
    templateUrl: './challenges.view.html'
})
export class ChallengesView implements OnInit {
    static selectComponent: Dynamic = {
        type: 'view', // view, partial, content
        contentType: 'challenge',
        viewReference: '559c8aa2-1566-499b-8d06-9577ab53d04a',
        viewType: 'challenges'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
