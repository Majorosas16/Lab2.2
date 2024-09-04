class CardStore extends HTMLElement {
    static get observedAttributes() {
      return ["img", "alt", "title"];
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
      <link rel="stylesheet" href="./src/components/card3/card.css">
      <div>
            <img src=${this.img} alt=${this.alt}>
            <h3>${this.title}</h3>
      </div>
  
      `;
    }
  }
  
  customElements.define("store-component", CardStore);
  export default CardStore;
  