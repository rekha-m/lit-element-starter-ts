var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./Starter.css";
let Starter = class Starter extends LitElement {
    render() {
        return html `
            <header-tabs>
                <div slot="tab-start" class="tab-logo"><img src ="../src/icons/made-up.png"/></div>
                <button slot="tab">For me</button>
                <button slot="tab">Jeans</button>
                <button slot="tab">Shirts</button>
                <button slot="tab">T-Shirts</button>
                <button slot="tab">Trousers</button>
                <button slot="tab">Joggers</button>
                <button slot="tab">Shorts</button>

                <div slot="tab-actions" class="tab-icons">
                    <img src="../src/icons/search.png" class="tab-action-icon"  />
                    <img src="../src/icons/shopping-cart.png" class="tab-action-icon" />
                    <img src="../src/icons/person_outline.png" class="tab-action-icon" @click=${this.handleUserProfile}/>
                </div>

                <div slot="panel"><for-me-tab-content></for-me-tab-content></div>
                <div slot="panel">Jeans</div>
                <div slot="panel">Shirts</div>
                <div slot="panel">T-Shirts</div>
                <div slot="panel">Trousers</div>
                <div slot="panel">Joggers</div>
                <div slot="panel">Shorts</div>
                <div slot="panel">
                    <vertical-tabs>
                        <div slot="tab-header" style="display: flex; align-items: center; gap: 30px;">
                            <img src="../src/icons/avatar.png" alt="Profile Picture" style="width: 80px; border-radius: 50%;" />
                            <div>
                                <div style="font-size: 16px; color: #333333;"> Grishk </div>
                                <div style="font-size:14px; color: #9B9B9B;"> griiskaim@gmail.com </div>
                            </div>
                        </div>
                        <button slot="tab">My Profile</button>
                        <button slot="tab">My Orders</button>
                        <button slot="tab">Shipping addresses</button>

                        <div slot="panel"><profile-info></profile-info></div>
                        <div slot="panel"><order-info></order-info></div>
                        <div slot="panel">Address</div>
                    </vertical-tabs>
                </div>
            </header-tabs>
            <footer-page></footer-page>
        `;
    }
    handleUserProfile() {
        const tabs = this.renderRoot.querySelector('header-tabs');
        if (tabs?.selectTab) {
            tabs.selectTab(7); // Or whatever index you want to show
        }
    }
};
Starter.styles = styles;
Starter = __decorate([
    customElement('starter-template')
], Starter);
export { Starter };
//# sourceMappingURL=Starter.js.map