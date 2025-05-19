import { css } from "lit";
export const styles = css `
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      font-family: sans-serif;
    }

    nav {
      display: flex;
      flex-direction: column;
      width: 400px;
      border-right: 1px solid #ddd;
      background: #f9f9f9;
      margin: 30px;
    }

    .tab-header {
        margin-bottom: 10px;
        padding:10px;
    }

    ::slotted([slot="tab"]) {
      padding: 1rem;
      text-align: left;
      border: none;
      height:80px;
      background: transparent;
      cursor: pointer;
      border-left: 4px solid transparent;
    }

    ::slotted([slot="tab"][selected]) {
      background: white;
      border-bottom: 1px solid #000000;
      font-weight: bold;
    }

    .panel-container {
      flex-grow: 1;
      padding: 1rem;
    }

    ::slotted([slot="panel"]) {
      display: none;
    }

    ::slotted([slot="panel"][selected]) {
      display: block;
    }
`;
//# sourceMappingURL=VerticalTabs.css.js.map