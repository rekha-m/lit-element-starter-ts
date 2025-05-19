var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './ProfileInfo.css';
let ProfileInfo = class ProfileInfo extends LitElement {
    render() {
        return html `
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
};
ProfileInfo.styles = styles;
ProfileInfo = __decorate([
    customElement('profile-info')
], ProfileInfo);
export { ProfileInfo };
//# sourceMappingURL=ProfileInfo.js.map