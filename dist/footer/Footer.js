var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./Footer.css";
let Footer = class Footer extends LitElement {
    render() {
        return html `
            <div class="container">
                <div class="links">
                    <div class="text"> About Us </div>
                    <div class="text"> Delivery Information </div>
                    <div class="text"> Returns & Exchange </div>
                    <div class="text"> Technical & Privacy </div>
                    <div class="text"> Order Status </div>
                </div>
                <div class="social-media">
                    <img src="../src/icons/made-up.png" />
                    <div class="text" style="margin-top:20px;color:#DDDDDD"> Stay in touch with us </div>
                    <div class="social-media-icons">
                        <img src="../src/icons/fb.png" />
                        <img src="../src/icons/Instagram.png" />
                        <img src="../src/icons/Youtube.png" />
                    </div>
                </div>
                <div class="links">
                    <div class="address" style="font-weight:bold; margin-bottom:10px;"> Our Corporate Office </div>
                    <div class="address"> No: 7,A2B road, Adayar Rajpuram, </div>
                    <div class="address"> T-Nagar, Chennai - 642002. </div>
                    <div style="margin-top:40px;">
                        <div class="address"> 
                             <img style="margin-right:10px;" src="../src/icons/Icon feather-mail.png" /> sales@madeup.com 
                        </div>
                        <div class="address" style="margin-top:10px;"> 
                            <img style="margin-right:10px;" src="../src/icons/Icon feather-phone-call.png" /> 
                            044 9999 9999 
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
Footer.styles = styles;
Footer = __decorate([
    customElement('footer-page')
], Footer);
export { Footer };
//# sourceMappingURL=Footer.js.map