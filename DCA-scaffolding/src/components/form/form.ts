/*enum formAttributes{
  "nombre" = "nombre",
  "color" = "color",
  "letra" = "letra"

}*/

 export class FormContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const formContainer = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(formContainer);

        const nombre = this.ownerDocument.createElement('input');
        nombre.appendChild(formContainer);

        const color = this.ownerDocument.createElement('input');
        color.appendChild(formContainer);
        
        const letra = this.ownerDocument.createElement('input');
        letra.appendChild(formContainer);
        
        const uploadButton = this.ownerDocument.createElement('button');
        uploadButton.appendChild(formContainer);

    }
}
customElements.define('form-app', FormContainer)