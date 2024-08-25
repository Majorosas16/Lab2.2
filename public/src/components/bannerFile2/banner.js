class Banner2 extends HTMLElement {
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
        <section>
            <h1>Star Wars Outlaws</h1>
            <p>Get 3 Days Early Access with Ubisof+ Premium or Gold Edition</p>
        </section>
    `;
    }
}

customElements.define('banner2-component', Banner2);
export default Banner2;