import "./components/export"
//import "./screens/login"
//import "./screens/dashboard"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const formContainer = this.ownerDocument.createElement('form-app');
        this.shadowRoot?.appendChild(formContainer);

    }
}

customElements.define('app-container', AppContainer)