import CartItems from "./cart-items-873c1282.js";
import "./utils-df16e8d7.js";
import "./theme-09a6ee05.js";
import "./modulepreload-polyfill-fef78a14.js";
class CartDrawerItems extends CartItems {
  getSectionsToRender() {
    return [
      {
        id: "CartDrawer",
        section: "cart-drawer",
        selector: '[tabindex="-1"]'
      },
      {
        id: "cart-icon-bubble",
        section: "cart-icon-bubble",
        selector: ".shopify-section"
      }
    ];
  }
}
window.customElements.define("cart-drawer-items", CartDrawerItems);
