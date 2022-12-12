import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-footer')
export class AppFooter extends LitElement {
  createRenderRoot() {
    return this;
  }
}
