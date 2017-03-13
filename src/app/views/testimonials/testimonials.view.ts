import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
    selector: 'testimonials-view',
    styleUrls: ['./testimonials.view.scss'],
    templateUrl: './testimonials.view.html'
})
export class TestimonialsView implements OnInit {
    static selectComponent: Dynamic = {
        selector: 'view-testimonial'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
