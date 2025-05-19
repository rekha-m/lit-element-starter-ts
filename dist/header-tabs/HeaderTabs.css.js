import { css } from "lit";
export const styles = css `
    nav {
        display: flex;
    }
    nav > ::slotted([slot="tab"]) {
        padding: 1rem 2rem;
        flex: 1 1 auto;
        border-style: none;
        background-color: white;
        color: black;
        border-bottom: 2px;
        text-align: center;
    }
    nav > ::slotted([slot="tab"][selected]) {
        color: red;
    }
    ::slotted([slot="panel"]) {
        display: none;
    }
    ::slotted([slot="panel"][selected]) {
        display: block;
    }`;
//# sourceMappingURL=HeaderTabs.css.js.map