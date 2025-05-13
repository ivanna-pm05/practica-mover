class BackCard extends HTMLElement {
    constructor(){
        super();
        const shadow=this.attachShadow({ mode: 'open'});

        const wrapper = document.createElement('div');
        wrapper.innerHTML = /*html*/`
            <h2><slot name="nombre">[Sin nombre]</slot></h2>
            <slot name="idname">[Sin nombre clave]</slot>
            <slot name="descripcion">[Sin descripcion]</slot>
            <button id="btn">Volver</button>
        `;
        const style = document.createElement('style');
        style.textContent = `
        div {
            width: 20vw;
            border: 2px solid #333;
            border-radius: 7px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            font-family: Arial, sans-serif;
            background-color: #05050573;
            color: #ffffff;
            min-height: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h2{
                font-size: 20px;
                text-align: center;
            }
            h2:hover {
                color: #ff1100;
                transition: color 0.3s ease;
            }

        }
        button {
            background-color: #ff1100;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 12px;
            padding: 5px;
            width: 80px;
            margin-left: 85px;
            }
        button:hover {
            transform: translateY(-10px);
            transition: transform 0.3s ease;
        }
        @media (max-width: 768px) {
            div {
            width: 90vw;
            max-width: 100%;
            margin: 10px 0;
            padding: 15px;
            box-sizing: border-box;
            border-radius: 0;
            }

            button {
                margin-left: auto;
                margin-right: auto;
                display: block;
            }
            }
        
        `;

        shadow.append(style, wrapper);

    } 
}
customElements.define('back-card', BackCard);