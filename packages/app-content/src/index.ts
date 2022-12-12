import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-content')
export class AppContent extends LitElement {
  createRenderRoot() {
    return this;
  }
}
