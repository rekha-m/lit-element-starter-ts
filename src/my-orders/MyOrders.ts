import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DeliveryStatus, Order, Payment } from "../DataTypes.js";
import { styles } from "./MyOrders.css.js";

@customElement('my-orders')
export class MyOrders extends LitElement {
    @property({ type: Object }) order!: Order;

    static override styles = styles;

override render() {
    return html`
            <div class="row"> 
                <img src="../src/images/orders.png" style="width:80px;height:80px;border: 10px solid #DDDDDD;"/>
                <div class="column">
                    <div class="description"> Order ${this.order.id} </div>
                    <div class="name"> ${this.order.name} </div>
                    <div class="description" style="margin-top: 10px;"> Express Delivery by ${this.order.delivery} </div>
                </div>

                <div class="column" style="display: flex; flex-direction: column; align-items: flex-end;">
                    ${this.order.paymentMethod === Payment.creditCard?
                        html`<div class="description"> Credit Card Payment </div>`:
                        html`<div class="description"> UPI/Cash </div>`
                    }
                    <div class="name"> Rs ${this.order.price} </div>
                    ${this.order.deliveryStatus === DeliveryStatus.pending?
                        html`<div class="description" style="margin-top:60px; background-color: #333333; border-radius: 6px 6px 0 0; padding: 5px; color: #FFFFFF;"> Pending </div>`:
                        html`<div class="description" style="margin-top:60px; background-color: #F3F3F3; border-radius: 6px 6px 0 0; padding: 5px; color: #777777;"> Delivered </div>`
                    }
                </div>
            </div>
            <div class="line"></div>

    `;
}
}