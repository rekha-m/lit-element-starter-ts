import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { sampleOrders } from '../constants.js';
import { styles } from './Orders.css.js';

@customElement('order-info')
export class Orders extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <div class="form-container">
        <div class="heading"> My Orders </div>
        ${sampleOrders.map(
            (order) => html`<my-orders .order=${order}></my-orders>`
        )}  
      </div>
    `;
  }
}
