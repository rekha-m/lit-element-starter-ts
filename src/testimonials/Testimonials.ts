import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Testimonial } from "../DataTypes";
import { styles } from "./Testimonials.css";

@customElement('user-testimonials')
export class Testimonials extends LitElement {

    @property({ type: Array }) testimonials: Testimonial[] = [];
    static override styles = styles;

  private renderStars(rating: number) {
    const fullStar = '★';
    const emptyStar = '☆';
    return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
  }

  override render() {
    return html`
        <div class = "container">
            <div class = "centered-text"> TESTIMONIALS </div>
                <div class="card-container">
                    ${this.testimonials.map(
                        (testimonial) => html`
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
                            </div>`
                    )}
                </div>
        </div>`;
  }

}