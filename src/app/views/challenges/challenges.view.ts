import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'challenges-view',
    styleUrls: ['./challenges.view.scss'],
    templateUrl: './challenges.view.html'
})
export class ChallengesView implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'view-challenge'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
