var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./Subscribe.css";
let Subscribe = class Subscribe extends LitElement {
    render() {
        return html `
      <div class="banner">
            <div class="line1"> GET COUPONS AND STYLE GUIDES </div>
            <div class="line2"> Subscribe to our NewsLetter </div>
             <div class="form-container">
                <input type="text" placeholder="Email" />
                <button>SUBSCRIBE</button>
            </div>
                <div class="icon-text">
                    <img src="../src/icons/location.svg" class="icon" />
                    <span class="label">LOCATE US</span>
                </div>
      </div>
    `;
    }
};
Subscribe.styles = styles;
Subscribe = __decorate([
    customElement('user-subscribe')
], Subscribe);
export { Subscribe };
//# sourceMappingURL=Subscribe.js.map