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
				
						<h1 class="bannerH1" >PROTECT PANDORA. BECOME NA'VI</h1>
						<p class="bannerp" >Reconnect with your lost heritage, discover what it truly means to be a Na'vi, and join other clans to protect pandora</p>
				
    `;
  }
}

customElements.define("banner-component", SecondBanner);
export default SecondBanner;
