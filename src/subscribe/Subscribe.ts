import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./Subscribe.css";

@customElement('user-subscribe')
export class Subscribe extends LitElement {
    static override styles = styles;

  override render() {
    return html`
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
}