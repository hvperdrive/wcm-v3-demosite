import { Component } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
  selector: 'no-content-partial',
  template: `
    <div>
      <h1>There was no component found for this partial so the fallback component was used</h1>
    </div>
  `
})
export class NoContentPartial {
    static selectComponent: Dynamic = {
        type: 'partial', // view, partial, content
        fallback: true
    };
}
