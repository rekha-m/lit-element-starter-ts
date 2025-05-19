import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './HeaderTabs.css';

@customElement('header-tabs')
export class HeaderTabs extends LitElement {
  static override styles = styles;

  _tabs: Element[];
  _panels: Element[];

  constructor() {
    super();
    this._tabs = Array.from(this.querySelectorAll("[slot=tab]"));
    console.log(this._tabs);
    this._panels = Array.from(this.querySelectorAll("[slot=panel]"));
    this.selectTab(0);
  }


  selectTab(tabIndex: any) {
    this._tabs.forEach((tab) => tab.removeAttribute("selected"));
    if (tabIndex !== 7) {
      this._tabs[tabIndex].setAttribute("selected", "");
    }
    this._panels.forEach((panel) => panel.removeAttribute("selected"));
    this._panels[tabIndex].setAttribute("selected", "");
  }

  handleSelect(e: any) {
    const index = this._tabs.indexOf(e.target);
    this.selectTab(index);
  }

  override render() {
    return html`
      <nav>
        <slot name="tab-start"></slot>
        <slot name="tab" @click=${(e: Event) => this.handleSelect(e)}></slot>
         <div class="tab-actions">
            <slot name="tab-actions"></slot>
         </div>
      </nav>
     
      <slot name="panel"></slot>
    `;
  }
}
