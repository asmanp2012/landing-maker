import {css} from 'lit';

export const baseCss = css`
  body {
    margin: 0px;
    background-color: var(--background-color);
  }
  app-root {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;
    contain: layout size style;
    overflow: hidden;
    z-index: 0;
  }

  app-footer {
    display: block;
    position: relative;
    -ms-flex-order: 1;
    order: 1;
    width: 100%;
    z-index: 10;
  }

  app-header {
    display: block;
    position: relative;
    -ms-flex-order: -1;
    order: -1;
    width: 100%;
    z-index: 10;
  }

  app-content {
    background: var(--background-color, #fff);
    --color: var(--text-color, #000);
    --padding-top: 0px;
    --padding-bottom: 0px;
    --padding-start: 0px;
    --padding-end: 0px;
    --keyboard-offset: 0px;
    --offset-top: 0px;
    --offset-bottom: 0px;
    --overflow: auto;
    display: block;
    position: relative;
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    font-family: var(--ion-font-family, inherit);
    contain: size style;
    margin: 0px !important;
    padding: 0px !important;
    overflow-y: var(--overflow);
    overscroll-behavior-y: contain;
    color: var(--text-color);
  }
`;
