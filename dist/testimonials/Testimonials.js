var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from "./Testimonials.css";
let Testimonials = class Testimonials extends LitElement {
    constructor() {
        super(...arguments);
        this.testimonials = [];
    }
    renderStars(rating) {
        const fullStar = '★';
        const emptyStar = '☆';
        return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
    }
    render() {
        return html `
        <div class = "container">
            <div class = "centered-text"> TESTIMONIALS </div>
                <div class="card-container">
                    ${this.testimonials.map((testimonial) => html `
                            <div class="card">
                                <div class="profile">
                                <img class="avatar" 
                                    src=${new URL(testimonial.profile, import.meta.url).href}
                                    alt="Profile photo of ${testimonial.name}" />
                                <div class="profile-info">
                                    <div class="name">${testimonial.name}</div>
                                    <div class="stars">${this.renderStars(testimonial.stars)}</div>
                                </div>
                                </div>
                                <p class="quote">${testimonial.content}</p>
                            </div>`)}
                </div>
        </div>`;
    }
};
Testimonials.styles = styles;
__decorate([
    property({ type: Array })
], Testimonials.prototype, "testimonials", void 0);
Testimonials = __decorate([
    customElement('user-testimonials')
], Testimonials);
export { Testimonials };
//# sourceMappingURL=Testimonials.js.map