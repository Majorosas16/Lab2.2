class CardGames extends HTMLElement {
  static get observedAttributes() {
    return ["img", "alt", "title", "icons", "color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[propName] = newValue;
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="./src/components/moreGames/card.css">
         <div>
                <img src=${this.img} alt=${this.alt}>
                <h3>${this.title}</h3>
         </div>
         <div class="icons-container"></div>

    `;
    const iconsContainer = this.shadowRoot.querySelector(".icons-container");

    if (this.icons) {
      // Dividir el contenido del atributo `icons` por el delimitador
      const iconsArray = this.icons.split("|");
      iconsArray.forEach((element) => {
        iconsContainer.innerHTML += element.trim(); // Añadir cada SVG al contenedor
      });
    }
  }
}

customElements.define("games-component", CardGames);
export default CardGames;
