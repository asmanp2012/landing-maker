import {css} from 'lit';
export const colorCss = css`
  :root {
    /** primary **/
    --color-primary: #3880ff;
    --color-primary-rgb: 56, 128, 255;
    --color-primary-contrast: #ffffff;
    --color-primary-contrast-rgb: 255, 255, 255;
    --color-primary-shade: #3171e0;
    --color-primary-tint: #4c8dff;

    /** secondary **/
    --color-secondary: #3dc2ff;
    --color-secondary-rgb: 61, 194, 255;
    --color-secondary-contrast: #ffffff;
    --color-secondary-contrast-rgb: 255, 255, 255;
    --color-secondary-shade: #36abe0;
    --color-secondary-tint: #50c8ff;

    /** tertiary **/
    --color-tertiary: #5260ff;
    --color-tertiary-rgb: 82, 96, 255;
    --color-tertiary-contrast: #ffffff;
    --color-tertiary-contrast-rgb: 255, 255, 255;
    --color-tertiary-shade: #4854e0;
    --color-tertiary-tint: #6370ff;

    /** success **/
    --color-success: #2dd36f;
    --color-success-rgb: 45, 211, 111;
    --color-success-contrast: #ffffff;
    --color-success-contrast-rgb: 255, 255, 255;
    --color-success-shade: #28ba62;
    --color-success-tint: #42d77d;

    /** warning **/
    --color-warning: #ffc409;
    --color-warning-rgb: 255, 196, 9;
    --color-warning-contrast: #000000;
    --color-warning-contrast-rgb: 0, 0, 0;
    --color-warning-shade: #e0ac08;
    --color-warning-tint: #ffca22;

    /** danger **/
    --color-danger: #eb445a;
    --color-danger-rgb: 235, 68, 90;
    --color-danger-contrast: #ffffff;
    --color-danger-contrast-rgb: 255, 255, 255;
    --color-danger-shade: #cf3c4f;
    --color-danger-tint: #ed576b;

    /** dark **/
    --color-dark: #222428;
    --color-dark-rgb: 34, 36, 40;
    --color-dark-contrast: #ffffff;
    --color-dark-contrast-rgb: 255, 255, 255;
    --color-dark-shade: #1e2023;
    --color-dark-tint: #383a3e;

    /** medium **/
    --color-medium: #92949c;
    --color-medium-rgb: 146, 148, 156;
    --color-medium-contrast: #ffffff;
    --color-medium-contrast-rgb: 255, 255, 255;
    --color-medium-shade: #808289;
    --color-medium-tint: #9d9fa6;

    /** light **/
    --color-light: #f4f5f8;
    --color-light-rgb: 244, 245, 248;
    --color-light-contrast: #000000;
    --color-light-contrast-rgb: 0, 0, 0;
    --color-light-shade: #d7d8da;
    --color-light-tint: #f5f6f9;
  }

  /*
   * Dark Colors
   * -------------------------------------------
   */

  body.dark {
    --color-primary: #428cff;
    --color-primary-rgb: 66,140,255;
    --color-primary-contrast: #ffffff;
    --color-primary-contrast-rgb: 255,255,255;
    --color-primary-shade: #3a7be0;
    --color-primary-tint: #5598ff;

    --color-secondary: #50c8ff;
    --color-secondary-rgb: 80,200,255;
    --color-secondary-contrast: #ffffff;
    --color-secondary-contrast-rgb: 255,255,255;
    --color-secondary-shade: #46b0e0;
    --color-secondary-tint: #62ceff;

    --color-tertiary: #6a64ff;
    --color-tertiary-rgb: 106,100,255;
    --color-tertiary-contrast: #ffffff;
    --color-tertiary-contrast-rgb: 255,255,255;
    --color-tertiary-shade: #5d58e0;
    --color-tertiary-tint: #7974ff;

    --color-success: #2fdf75;
    --color-success-rgb: 47,223,117;
    --color-success-contrast: #000000;
    --color-success-contrast-rgb: 0,0,0;
    --color-success-shade: #29c467;
    --color-success-tint: #44e283;

    --color-warning: #ffd534;
    --color-warning-rgb: 255,213,52;
    --color-warning-contrast: #000000;
    --color-warning-contrast-rgb: 0,0,0;
    --color-warning-shade: #e0bb2e;
    --color-warning-tint: #ffd948;

    --color-danger: #ff4961;
    --color-danger-rgb: 255,73,97;
    --color-danger-contrast: #ffffff;
    --color-danger-contrast-rgb: 255,255,255;
    --color-danger-shade: #e04055;
    --color-danger-tint: #ff5b71;

    --color-dark: #f4f5f8;
    --color-dark-rgb: 244,245,248;
    --color-dark-contrast: #000000;
    --color-dark-contrast-rgb: 0,0,0;
    --color-dark-shade: #d7d8da;
    --color-dark-tint: #f5f6f9;

    --color-medium: #989aa2;
    --color-medium-rgb: 152,154,162;
    --color-medium-contrast: #000000;
    --color-medium-contrast-rgb: 0,0,0;
    --color-medium-shade: #86888f;
    --color-medium-tint: #a2a4ab;

    --color-light: #222428;
    --color-light-rgb: 34,36,40;
    --color-light-contrast: #ffffff;
    --color-light-contrast-rgb: 255,255,255;
    --color-light-shade: #1e2023;
    --color-light-tint: #383a3e;
  }

  /*
   * iOS Dark Theme
   * -------------------------------------------
   */

  .ios body.dark {
    --background-color: #03060b;
    --background-color-rgb: 0,0,0;

    --text-color: #ffffff;
    --text-color-rgb: 255,255,255;

    --color-step-50: #0d0d0d;
    --color-step-100: #1a1a1a;
    --color-step-150: #262626;
    --color-step-200: #333333;
    --color-step-250: #404040;
    --color-step-300: #4d4d4d;
    --color-step-350: #595959;
    --color-step-400: #666666;
    --color-step-450: #737373;
    --color-step-500: #808080;
    --color-step-550: #8c8c8c;
    --color-step-600: #999999;
    --color-step-650: #a6a6a6;
    --color-step-700: #b3b3b3;
    --color-step-750: #bfbfbf;
    --color-step-800: #cccccc;
    --color-step-850: #d9d9d9;
    --color-step-900: #e6e6e6;
    --color-step-950: #f2f2f2;

    --item-background: #000000;

    --card-background: #1c1c1d;
  }

  .ios body.dark ion-modal {
    --background-color: var(--color-step-100);
    --toolbar-background: var(--color-step-150);
    --toolbar-border-color: var(--color-step-250);
  }


  /*
   * Material Design Dark Theme
   * -------------------------------------------
   */

  .md body.dark {
    --background-color: #03060b;
    --background-color-rgb: 18,18,18;

    --text-color: #ffffff;
    --text-color-rgb: 255,255,255;

    --border-color: #222222;

    --color-step-50: #1e1e1e;
    --color-step-100: #2a2a2a;
    --color-step-150: #363636;
    --color-step-200: #414141;
    --color-step-250: #4d4d4d;
    --color-step-300: #595959;
    --color-step-350: #656565;
    --color-step-400: #717171;
    --color-step-450: #7d7d7d;
    --color-step-500: #898989;
    --color-step-550: #949494;
    --color-step-600: #a0a0a0;
    --color-step-650: #acacac;
    --color-step-700: #b8b8b8;
    --color-step-750: #c4c4c4;
    --color-step-800: #d0d0d0;
    --color-step-850: #dbdbdb;
    --color-step-900: #e7e7e7;
    --color-step-950: #f3f3f3;

    --item-background: #1e1e1e;

    --toolbar-background: #1f1f1f;

    --tab-bar-background: #1f1f1f;

    --card-background: #1e1e1e;
  }

  :root {
    --safe-area-top: 20px;
    --safe-area-bottom: 22px;
  }
`;
