class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Ortega Mora Brandon
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
