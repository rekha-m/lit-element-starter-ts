var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DeliveryStatus, Payment } from "../DataTypes.js";
import { styles } from "./MyOrders.css.js";
let MyOrders = class MyOrders extends LitElement {
    render() {
        return html `
            <div class="row"> 
                <img src="../src/images/orders.png" style="width:80px;height:80px;border: 10px solid #DDDDDD;"/>
                <div class="column">
                    <div class="description"> Order ${this.order.id} </div>
                    <div class="name"> ${this.order.name} </div>
                    <div class="description" style="margin-top: 10px;"> Express Delivery by ${this.order.delivery} </div>
                </div>

                <div class="column" style="display: flex; flex-direction: column; align-items: flex-end;">
                    ${this.order.paymentMethod === Payment.creditCard ?
            html `<div class="description"> Credit Card Payment </div>` :
            html `<div class="description"> UPI/Cash </div>`}
                    <div class="name"> Rs ${this.order.price} </div>
                    ${this.order.deliveryStatus === DeliveryStatus.pending ?
            html `<div class="description" style="margin-top:60px; background-color: #333333; border-radius: 6px 6px 0 0; padding: 5px; color: #FFFFFF;"> Pending </div>` :
            html `<div class="description" style="margin-top:60px; background-color: #F3F3F3; border-radius: 6px 6px 0 0; padding: 5px; color: #777777;"> Delivered </div>`}
                </div>
            </div>
            <div class="line"></div>

    `;
    }
};
MyOrders.styles = styles;
__decorate([
    property({ type: Object })
], MyOrders.prototype, "order", void 0);
MyOrders = __decorate([
    customElement('my-orders')
], MyOrders);
export { MyOrders };
//# sourceMappingURL=MyOrders.js.map