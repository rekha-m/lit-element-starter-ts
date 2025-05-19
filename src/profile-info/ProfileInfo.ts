import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './ProfileInfo.css';

@customElement('profile-info')
export class ProfileInfo extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <div class="form-container">
        <div class="heading"> My Profile </div>
        <div class="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <button class="submit-button"> ADD NEW ADDRESS </button>
      </div>
    `;
  }
}
