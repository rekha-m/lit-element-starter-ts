import { LitElement, html } from 'lit';
import { customElement, queryAssignedElements, state } from 'lit/decorators.js';
import { styles } from './VerticalTabs.css';

@customElement('vertical-tabs')
export class VerticalTabs extends LitElement {
  @queryAssignedElements({ slot: 'tab' }) private _tabs!: HTMLElement[];
  @queryAssignedElements({ slot: 'panel' }) private _panels!: HTMLElement[];

  @state() private selectedIndex = 0;

  static override styles = styles;

  override firstUpdated() {
    this.updateSelection(0);
  }

  private handleSelect(index: number) {
    this.updateSelection(index);
  }

  private updateSelection(index: number) {
    this._tabs?.forEach((tab, i) => {
      tab.toggleAttribute('selected', i === index);
    });
    this._panels?.forEach((panel, i) => {
      panel.toggleAttribute('selected', i === index);
    });
    this.selectedIndex = index;
    console.log(this.selectedIndex)
  }

  override render() {
    return html`
      <nav>
        <div class="tab-header">
            <slot name="tab-header"></slot>
        </div>
        <slot name="tab" @click=${(e: Event) => this.handleClick(e)}></slot>
      </nav>
      
      <div class="panel-container">
        <slot name="panel"></slot>
      </div>
    `;
  }

  private handleClick(e: Event) {
    const tab = e.target as HTMLElement;
    const index = this._tabs.indexOf(tab);
    if (index !== -1) {
      this.handleSelect(index);
    }
  }
}
