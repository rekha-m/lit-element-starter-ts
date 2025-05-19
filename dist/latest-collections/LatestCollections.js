var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./LatestCollections.css";
let LatestCollections = class LatestCollections extends LitElement {
    constructor() {
        super(...arguments);
        this.products = [];
    }
    render() {
        return html `
        <div class = "container">
            <div class = "centered-text"> LATEST COLLECTIONS </div>
                <div class="product-row">
                    ${this.products.map((product) => html `
                        <div class="product">
                            <img src=${product.image} alt=${product.name} />
                            <div class="product-name">${product.name}</div>
                            <div class="price-tag">${product.price}</div>
                        </div>
                        `)}
                </div>
        </div>
    `;
    }
};
LatestCollections.styles = styles;
__decorate([
    property({ type: Array })
], LatestCollections.prototype, "products", void 0);
LatestCollections = __decorate([
    customElement('latest-collections')
], LatestCollections);
export { LatestCollections };
//# sourceMappingURL=LatestCollections.js.map