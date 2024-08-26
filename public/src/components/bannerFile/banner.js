class Banner extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'alt', 'title', 'description', 'txtbutton'];
}

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
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
         <link rel="stylesheet" href="./index.css">
           	  <section class="sec">
				<img src="./src/assets/ubisof+.png" alt="pagina de contenido extra de ubisof">
				<div>
					<div>
						<h1>PROTECT PANDORA. BECOME NA'VI</h1>
						<p>Reconnect with your lost heritage, discover what it truly means to be a Na'vi, and join other clans to protect pandora</p>
					</div>
				</div>
			</section>
    `;
    }
}

customElements.define('button-component', Banner);
export default Banner;