class CardGames extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'title', 'icons','color', 'label'];
}

constructor() {
    super();
    this.attachShadow({ mode: "open" });
}

connectedCallback() {
    this.render();
    this.updateStyle();
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
        <link rel="stylesheet" href="./src/components/moreGames/card.css">
        <section class="sec2">
        <img src="./src/assets/ubisof+.png" alt="pagina de contenido extra de ubisof">
            <div>
              <h1>Star Wars Outlaws</h1>
              <p>Get 3 Days Early Access with Ubisof+ Premium or Gold Edition</p>

    <section>
        <h1>EXPLORAR MÁS JUEGOS</h1>
        <div>
            <div>
                <img src="" alt="">
                <h3></h3>
                <div>
                    <!-- aquí los íconos -->
                </div>
            </div>
        </div>
        <button>${this.getAttribute("label") || "Botón"}</button>
    </section>

    `;
    }
}

customElements.define('games-component', CardGames);
export default CardGames;