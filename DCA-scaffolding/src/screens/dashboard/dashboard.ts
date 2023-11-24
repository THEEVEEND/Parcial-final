import "./components/export"

export class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const formContainer = this.ownerDocument.createElement('form');
        this.shadowRoot?.appendChild(formContainer);
    }
}