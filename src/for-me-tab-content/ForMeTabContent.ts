import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { sampleProducts, testimonial } from "../constants";

@customElement('for-me-tab-content')
export class ForMeTabContent extends LitElement {

    override render() {
        return html`
            <image-grid></image-grid>
            <latest-collections .products=${sampleProducts}></latest-collections>
            <user-testimonials .testimonials=${testimonial}></user-testimonials>
            <user-subscribe></user-subscribe>
        `;
    }
}