import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  createRenderRoot() {
    return this;
  }
}
