import { Component, OnInit, Input } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
    selector: 'testimonials-view',
    styleUrls: ['./testimonials.view.scss'],
    templateUrl: './testimonials.view.html'
})
export class TestimonialsView implements OnInit {
    static selectComponent: Dynamic = {
        type: 'view', // view, partial, content
        contentType: 'testimonial',
        viewReference: '386184d3-0375-451d-92e5-d7e26356924a',
        viewType: 'testimonials'
    };

    @Input()
    data: any;

    public ngOnInit() {}
}
