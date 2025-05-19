var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { sampleOrders } from '../constants.js';
import { styles } from './Orders.css.js';
let Orders = class Orders extends LitElement {
    render() {
        return html `
      <div class="form-container">
        <div class="heading"> My Orders </div>
        ${sampleOrders.map((order) => html `<my-orders .order=${order}></my-orders>`)}  
      </div>
    `;
    }
};
Orders.styles = styles;
Orders = __decorate([
    customElement('order-info')
], Orders);
export { Orders };
//# sourceMappingURL=Orders.js.map