var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './HeaderTabs.css';
let HeaderTabs = class HeaderTabs extends LitElement {
    constructor() {
        super();
        this._tabs = Array.from(this.querySelectorAll("[slot=tab]"));
        console.log(this._tabs);
        this._panels = Array.from(this.querySelectorAll("[slot=panel]"));
        this.selectTab(0);
    }
    selectTab(tabIndex) {
        this._tabs.forEach((tab) => tab.removeAttribute("selected"));
        if (tabIndex !== 7) {
            this._tabs[tabIndex].setAttribute("selected", "");
        }
        this._panels.forEach((panel) => panel.removeAttribute("selected"));
        this._panels[tabIndex].setAttribute("selected", "");
    }
    handleSelect(e) {
        const index = this._tabs.indexOf(e.target);
        this.selectTab(index);
    }
    render() {
        return html `
      <nav>
        <slot name="tab-start"></slot>
        <slot name="tab" @click=${(e) => this.handleSelect(e)}></slot>
         <div class="tab-actions">
            <slot name="tab-actions"></slot>
         </div>
      </nav>
     
      <slot name="panel"></slot>
    `;
    }
};
HeaderTabs.styles = styles;
HeaderTabs = __decorate([
    customElement('header-tabs')
], HeaderTabs);
export { HeaderTabs };
//# sourceMappingURL=HeaderTabs.js.map