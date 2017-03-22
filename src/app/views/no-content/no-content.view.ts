import { Component } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
  selector: 'no-content-view',
  template: `
    <div>
      <h1>There was no component found for this view so the fallback component was used</h1>
    </div>
  `
})
export class NoContentView {
    static selectComponent: Dynamic = {
        type: 'view', // view, partial, content
        fallback: true
    };
}
