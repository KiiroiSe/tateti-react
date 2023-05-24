import './NamesInput.css';
import classNames from 'classnames';

const NamesInput = ({ onClick,hide }) => {
    let compoClass = classNames({
        namesInput:true,
        hide: hide
    });
    return (

        <div className={compoClass}>
            <div className='title'>
                <h1>TaTeTi</h1>
            </div>
            <label>
                <div className='p1Input'></div>
                <input type="text" name="p1" placeholder='Jugador 1'/>
            </label>
            <label>
                <div className='p2Input'></div>
                <input type="text" name="p2" placeholder='Jugador 2'/>
            </label>
            <button className='startGame' onClick={() => onClick()}>Iniciar Juego</button>
        </div>
    
    )
}

export default NamesInput;