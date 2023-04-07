import "../hojas-de-estilo/Boton.css"

function Botton({texto, esBotonDeClick, manejarClick}) {
    return(
        <button 
            className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
            onClick={manejarClick}>
            {texto}
            <span className="boton-span-1"></span>
            <span className="boton-span-2"></span>
            <span className="boton-span-3"></span>
            <span className="boton-span-4"></span>
        </button>
    );
}

export default Botton;