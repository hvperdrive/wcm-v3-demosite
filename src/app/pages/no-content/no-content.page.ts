import { Component } from '@angular/core';
import { Dynamic } from 'wcm-template-manager-ng2';

@Component({
  selector: 'no-content-page',
  template: `
    <div>
      <h1>404: page missing</h1>
    </div>
  `
})
export class NoContentPage {
    static selectComponent: Dynamic = {
        selector: 'content'
    };
}
