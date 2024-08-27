class SecondBanner extends HTMLElement {
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

customElements.define("banner-component", SecondBanner);
export default SecondBanner;
