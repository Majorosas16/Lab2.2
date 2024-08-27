import * as components from "./components/indexPadre.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
      this.shadowRoot.innerHTML = `

                <link rel="stylesheet" href="./index.css">

                <nav-component></nav-component>
                <banner-component></banner-component>

                <section class="sec2">
                <img src="./src/assets/ubisof+.png" alt="pagina de contenido extra de ubisof">
                
                <div>
                <bannertwo-component></bannertwo-component>
                <btn-component  color="#FF0D78"label="ÚNETE YA"></btn-component>
                </section>
                </div>

              
                `;
  }
}

customElements.define("app-container", AppContainer);
 // <games-component></games-component>