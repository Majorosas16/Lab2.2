class CardNews extends HTMLElement {
    static get observedAttributes() {
      return ["img", "alt", "title", "date"];
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
      <link rel="stylesheet" href="./src/components/card2/card.css">
      <div>
            <img src=${this.img} alt=${this.alt}>
            <div>
            <h3>${this.title}</h3>
            <p>${this.date}</p>
            </div>
      </div>
  
      `;
    }
  }
  
  customElements.define("news-component", CardNews);
  export default CardNews;
  