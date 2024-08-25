        import * as components from './components/indexPadre.js';

        class AppContainer extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' }); 
        }

        connectedCallback() {
            this.render();
        }

        render() {
            this.shadowRoot.innerHTML = `
                <product-card></product-card>
                `;
        }
        }

        customElements.define('app-container', AppContainer);

    