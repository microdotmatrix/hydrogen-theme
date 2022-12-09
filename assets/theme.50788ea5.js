const p="modulepreload",E=function(n,t){return new URL(n,t).href},_={},i=function(t,o,d){if(!o||o.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=E(e,d),e in _)return;_[e]=!0;const s=e.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!d)for(let f=r.length-1;f>=0;f--){const m=r[f];if(m.href===e&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${l}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":p,s||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),s)return new Promise((f,m)=>{a.addEventListener("load",f),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();function b(n){return Array.from(n.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe")).filter(o=>!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length))}const u={};function R(n,t=n){const o=b(n),d=o[0],r=o[o.length-1];h(),u.focusin=e=>{e.target!==n&&e.target!==r&&e.target!==d||document.addEventListener("keydown",u.keydown)},u.focusout=function(){document.removeEventListener("keydown",u.keydown)},u.keydown=function(e){e.code.toUpperCase()==="TAB"&&(e.target===r&&!e.shiftKey&&(e.preventDefault(),d.focus()),(e.target===n||e.target===d)&&e.shiftKey&&(e.preventDefault(),r.focus()))},document.addEventListener("focusout",u.focusout),document.addEventListener("focusin",u.focusin),t.focus()}function h(n=null){document.removeEventListener("focusin",u.focusin),document.removeEventListener("focusout",u.focusout),document.removeEventListener("keydown",u.keydown),n&&n.focus()}function v(n){if(n.code.toUpperCase()!=="ESCAPE")return;const t=n.target.closest("details[open]");if(!t)return;const o=t.querySelector("summary");t.removeAttribute("open"),o.setAttribute("aria-expanded",!1),o.focus()}function g(n){n.forEach(t=>{t.setAttribute("role","button"),t.setAttribute("aria-expanded",t.parentNode.hasAttribute("open")),t.nextElementSibling.getAttribute("id")&&t.setAttribute("aria-controls",t.nextElementSibling.id),t.addEventListener("click",o=>{o.currentTarget.setAttribute("aria-expanded",!o.currentTarget.closest("details").hasAttribute("open"))}),t.parentElement.addEventListener("keyup",v)})}function w({query:n}){const t=window.matchMedia(n);return new Promise(function(o){t.matches?o(!0):t.addEventListener("change",o,{once:!0})})}function y({element:n}){return new Promise(function(t){const o=new window.IntersectionObserver(async function(d){for(const r of d)if(r.isIntersecting){o.disconnect(),t(!0);break}});o.observe(n)})}function L(){return new Promise(function(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,200)})}function A(n){const t=/([^/\\]+)\.((j|t)sx?|m[jt]s|vue|marko|svelte|astro)($|\?)/,o=Object.keys(n),d=new window.MutationObserver(e=>{for(let s=0;s<e.length;s++){const{addedNodes:l}=e[s];for(let c=0;c<l.length;c++){const a=l[c];a.nodeType===1&&r(a)}}});async function r(e){const s=o.find(a=>{const f=e.tagName;return a.match(t)[1].toUpperCase()===f});if(s){e.hasAttribute("client:visible")&&await y({element:e});const a=e.getAttribute("client:media");a&&await w({query:a}),e.hasAttribute("client:iddle")&&await L(),n[s]()}const l=e.nextElementSibling,c=e.firstElementChild;l&&r(l),c&&r(c)}r(document.body),d.observe(document.body,{childList:!0,subtree:!0})}const O=Object.assign({"/frontend/islands/cart-drawer-items.js":()=>i(()=>import("./cart-drawer-items.2e02786d.js"),["./cart-drawer-items.2e02786d.js","./cart-items.9d5a809b.js","./utils.08d7e350.js"],import.meta.url),"/frontend/islands/cart-drawer.js":()=>i(()=>import("./cart-drawer.3cdfe676.js"),[],import.meta.url),"/frontend/islands/cart-items.js":()=>i(()=>import("./cart-items.9d5a809b.js"),["./cart-items.9d5a809b.js","./utils.08d7e350.js"],import.meta.url),"/frontend/islands/cart-note.js":()=>i(()=>import("./cart-note.84ee80e4.js"),["./cart-note.84ee80e4.js","./utils.08d7e350.js"],import.meta.url),"/frontend/islands/cart-remove-button.js":()=>i(()=>import("./cart-remove-button.026b711f.js"),[],import.meta.url),"/frontend/islands/details-disclosure.js":()=>i(()=>import("./details-disclosure.0f5e0452.js"),[],import.meta.url),"/frontend/islands/details-modal.js":()=>i(()=>import("./details-modal.5e9c72d8.js"),[],import.meta.url),"/frontend/islands/header-drawer.js":()=>i(()=>import("./header-drawer.901b8220.js"),["./header-drawer.901b8220.js","./details-modal.5e9c72d8.js"],import.meta.url),"/frontend/islands/localization-form.js":()=>i(()=>import("./localization-form.8afaa82f.js"),[],import.meta.url),"/frontend/islands/password-modal.js":()=>i(()=>import("./password-modal.71345040.js"),["./password-modal.71345040.js","./details-modal.5e9c72d8.js"],import.meta.url),"/frontend/islands/product-form.js":()=>i(()=>import("./product-form.6271c450.js"),["./product-form.6271c450.js","./utils.08d7e350.js"],import.meta.url),"/frontend/islands/product-recommendations.js":()=>i(()=>import("./product-recommendations.59c2b40d.js"),[],import.meta.url),"/frontend/islands/quantity-input.js":()=>i(()=>import("./quantity-input.c016a8a7.js"),[],import.meta.url),"/frontend/islands/sticky-header.js":()=>i(()=>import("./sticky-header.f66d012e.js"),[],import.meta.url),"/frontend/islands/variant-radios.js":()=>i(()=>import("./variant-radios.9b760452.js"),["./variant-radios.9b760452.js","./variant-selects.000ea3b2.js"],import.meta.url),"/frontend/islands/variant-selects.js":()=>i(()=>import("./variant-selects.000ea3b2.js"),[],import.meta.url)}),P=document.querySelectorAll('[id^="Details-"] summary');A(O);g(P);window.decodeURI(window.location.pathname)==="/account/addresses"&&(i(()=>import("./shopify_common.738cb7ac.js"),[],import.meta.url),i(()=>import("./customer-address.484c96ca.js"),[],import.meta.url));export{h as r,R as t};
