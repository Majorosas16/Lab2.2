class Button extends HTMLElement {
    static get observedAttributes() {
        return ["color", "label"];
}

constructor() {
    super();
    this.attachShadow({ mode: "open" });
}

connectedCallback() {
    this.render();
    this.updateStyle();

}

attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
    // Comprueba si realmente cambió el valor
    if (name === this.color) {
        this.updateStyle();
    } else if (name === this.label) {
        this.updateLabel();
    }
    }
}

updateStyle() {
    const button = this.shadowRoot.querySelector("button");
    const color = this.getAttribute("color") || "gray"; //Gray por si no hay color, es uno por defecto
    button.style.backgroundColor = color;
}

updateLabel() {
    const button = this.shadowRoot.querySelector("button");
    const label = this.getAttribute("label") || "Botón";
    button.textContent = label;
}

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/btn/button.css">
        <button>${this.getAttribute("label") || "Botón"}</button>
    `;
    }
}

customElements.define('btn-component', Button);
export default Button;