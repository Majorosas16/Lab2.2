class MainBanner extends HTMLElement {
	static get observedAttributes() {
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

    render() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="./index.css">
        <h1 class="h1" >Star Wars Outlaws</h1>
        <p class="p">Get 3 Days Early Access with Ubisof+ Premium or Gold Edition</p>
    `;
    }
}

customElements.define('bannertwo-component', MainBanner);
export default MainBanner;