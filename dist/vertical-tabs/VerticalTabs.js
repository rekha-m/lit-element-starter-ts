var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, queryAssignedElements, state } from 'lit/decorators.js';
import { styles } from './VerticalTabs.css';
let VerticalTabs = class VerticalTabs extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedIndex = 0;
    }
    firstUpdated() {
        this.updateSelection(0);
    }
    handleSelect(index) {
        this.updateSelection(index);
    }
    updateSelection(index) {
        this._tabs?.forEach((tab, i) => {
            tab.toggleAttribute('selected', i === index);
        });
        this._panels?.forEach((panel, i) => {
            panel.toggleAttribute('selected', i === index);
        });
        this.selectedIndex = index;
        console.log(this.selectedIndex);
    }
    render() {
        return html `
      <nav>
        <div class="tab-header">
            <slot name="tab-header"></slot>
        </div>
        <slot name="tab" @click=${(e) => this.handleClick(e)}></slot>
      </nav>
      
      <div class="panel-container">
        <slot name="panel"></slot>
      </div>
    `;
    }
    handleClick(e) {
        const tab = e.target;
        const index = this._tabs.indexOf(tab);
        if (index !== -1) {
            this.handleSelect(index);
        }
    }
};
VerticalTabs.styles = styles;
__decorate([
    queryAssignedElements({ slot: 'tab' })
], VerticalTabs.prototype, "_tabs", void 0);
__decorate([
    queryAssignedElements({ slot: 'panel' })
], VerticalTabs.prototype, "_panels", void 0);
__decorate([
    state()
], VerticalTabs.prototype, "selectedIndex", void 0);
VerticalTabs = __decorate([
    customElement('vertical-tabs')
], VerticalTabs);
export { VerticalTabs };
//# sourceMappingURL=VerticalTabs.js.map