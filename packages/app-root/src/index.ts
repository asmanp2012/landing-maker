import {LitElement} from 'lit';
import { baseCss, colorCss } from './css/index.js';
import {customElement} from 'lit/decorators.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  firstUpdated() {
    const head = document.querySelector('head');
    const qStyleTag = document.querySelector('head #app-root-style');
    const mixStyle = `${colorCss.cssText}\n${baseCss.cssText}`;
    if(qStyleTag == null)
    {
      const styleTag = document.createElement('style');
      styleTag.id = 'app-root-style';
      styleTag.innerHTML = `${styleTag.innerHTML}\n${mixStyle}`;
      head?.appendChild(styleTag);
    }
    else
    {
      qStyleTag.innerHTML = `${qStyleTag.innerHTML}\n${mixStyle}`;
    }
  }
  createRenderRoot() {
    return this;
  }
}
