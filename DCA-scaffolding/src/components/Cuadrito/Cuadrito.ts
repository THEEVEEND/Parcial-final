//enum, constructor, conectedcallback,attributeChangedCallback, render
/*enum formAttributes{
  "color" = "color",
  "letra" = "letra"

}*/
export class Cuadrito extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const cuadritoContainer = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(cuadritoContainer);

        const color = this.ownerDocument.createElement('');
        color.appendChild(cuadritoContainer);
        
        const letra = this.ownerDocument.createElement('');
        letra.appendChild(cuadritoContainer);

    }
}
customElements.define('cuadrito', Cuadrito)