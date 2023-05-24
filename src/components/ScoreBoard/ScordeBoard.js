import classNames from 'classnames';
import './ScoreBoard.css';

const ScoreBoard = ({scoreX, scoreO, show, nameP1, nameP2}) => {

    const scoreBoardClass = classNames({
        scoreBoard:true,
        show:show
    });

    return (
        <div className={scoreBoardClass}>
            <div><span>{nameP1}:</span>{scoreX}</div>
            <div><span>{nameP2}:</span>{scoreO}</div>
        </div>
    )
}

export default ScoreBoard;