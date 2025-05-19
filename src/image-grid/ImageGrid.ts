import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './ImageGrid.css';

@customElement('image-grid')
export class ImageGrid extends LitElement {

  static override styles = styles;

  override render() {
    let darkHairedManUrl = new URL('../../src/images/dark_haired_man_in_brown_leather_jacket.jpg', import.meta.url).href;
    let modernBusinessManUrl = new URL('../../src/images/modern_businessman_in_india.jpg', import.meta.url).href;
    let urbanMensUrl = new URL('../../src/images/urban_mens_fashion.jpg', import.meta.url).href;

    return html`
        <div class="row"> 
            <div class="image-container">
                <img src=${urbanMensUrl} style="width:100%;height:auto">
                <div class="text-blocks">
                    <div class="text-container">Clothes that <span class="red"> respire </span></div>
                    <div class="text-container">for men who <span class="red">aspire</span></div>
                    <button class="buttonStyle"> BROWSE COLLECTIONS </button>
                </div>
            </div>
            <div class="column">
                 <div class="image-container">
                    <img src=${darkHairedManUrl} style="height:100%">
                    <div class="text-blocks">
                        <div class="text-container"><span class="red">Summer</span> is here</div>
                        <div class="text-container">and so is our <span class="red">collection</span></div>
                    </div> 
                </div>  
            </div>  
            <div class="column">
                <div class="image-container">
                    <img src=${modernBusinessManUrl} style="width:100%">
                    <div class="text-blocks">
                        <div class="text-container"><span class="red">Wrinkle-free</span> t-shirts</div>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src=${darkHairedManUrl} style="width:100%; height:690px">
                    <div class="text-blocks">
                        <div class="text-container"><span class="red">Stain-free</span> denim shirts</div>
                    </div>
                </div>
            </div>
        
        </div>
    `;
  }
}