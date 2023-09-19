import '../App.css';

function ObtencionNombre({nombre, saludo, onChange, mensajeNombreError, inputRef}) {
    return (
        <div className="bloque" id="nombreJugador">
            <label htmlFor="jugador">Jugador:</label>
            <br />
            <div className="inputNombre">
                <input
                    id="jugador"
                    type="text"
                    ref={inputRef}
                    value={nombre === null ? '' : nombre}
                    placeholder="Ingresa un nombre!"
                    onChange={onChange}
                    required=""
                />
            </div>
            {(saludo && <p>Hola, {nombre}!</p>)} 
            <p id="mensajeCampoVacíoNombre"> {mensajeNombreError && ("Ingresa un nombre para jugar!")} </p>
        </div>  
    ); 
}

export default ObtencionNombre;