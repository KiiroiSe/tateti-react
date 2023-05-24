import classNames from "classnames";
import Square from "../Square/Square";
import './Board.css';

const Board = ({ squares, onClick, turn, winningSquares,show }) => {

    const boardClass = classNames({
        board:true,
        show:show,
    });

    const createSquares = values => (
        values.map( value => (
            <Square
                winner={winningSquares.includes(value)}
                turn={turn}
                onClick={() => onClick(value)}
                value={squares[value]}
                key={`square_${value}`}
            />
        ))
    );

    return (
        <div className={boardClass}>
            <div className="row">
                {createSquares([0,1,2])}
            </div>
            <div className="row">
                {createSquares([3,4,5])}
            </div>
            <div className="row">
                {createSquares([6,7,8])}
            </div>
        </div>
    );
}

export default Board;