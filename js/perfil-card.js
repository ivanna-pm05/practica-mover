class PerfilCard extends HTMLElement {
    constructor(){
        super();
        const shadow=this.attachShadow({ mode: 'open'});
        const wrapper = document.createElement('div');
        wrapper.innerHTML = /*html*/`
        <img id="id-perfil" src="" alt="Foto-perfil"></img>
        <h2><slot name="nombre">[Sin nombre]</slot></h2>
        <slot name="idname">[Sin nombre clave]</slot>
        <button id="btn">Mas info</button>
        `

    } 
}
customElements.define('perfil-card', PerfilCard);