import { Component } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';
// import { Dynamic } from '../../components/dynamic/dynamic';

@Component({
  selector: 'no-content-page',
  template: `
    <div>
      <h1>There was no component found for this content so the fallback component was used</h1>
    </div>
  `
})
export class NoContentPage {
    static selectComponent: Dynamic = {
        type: 'content', // view, partial, content
        fallback: true
    };
}
