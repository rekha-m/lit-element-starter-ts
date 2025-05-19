var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { sampleProducts, testimonial } from "../constants";
let ForMeTabContent = class ForMeTabContent extends LitElement {
    render() {
        return html `
            <image-grid></image-grid>
            <latest-collections .products=${sampleProducts}></latest-collections>
            <user-testimonials .testimonials=${testimonial}></user-testimonials>
            <user-subscribe></user-subscribe>
        `;
    }
};
ForMeTabContent = __decorate([
    customElement('for-me-tab-content')
], ForMeTabContent);
export { ForMeTabContent };
//# sourceMappingURL=ForMeTabContent.js.map