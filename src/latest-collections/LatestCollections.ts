import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Product } from "../DataTypes";
import { styles } from "./LatestCollections.css";

@customElement('latest-collections')
export class LatestCollections extends LitElement {
    @property({ type: Array }) products: Product[] = [];
    
    static override styles = styles;

  override render() {
    return html`
        <div class = "container">
            <div class = "centered-text"> LATEST COLLECTIONS </div>
                <div class="product-row">
                    ${this.products.map(
                        (product) => html`
                        <div class="product">
                            <img src=${product.image} alt=${product.name} />
                            <div class="product-name">${product.name}</div>
                            <div class="price-tag">${product.price}</div>
                        </div>
                        `
                    )}
                </div>
        </div>
    `;
  }
}

