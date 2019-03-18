import React from 'react';
import Title from '../Title/Title.jsx';
import Board from '../Board/Board.jsx';
import './Game.scss';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      current: {
        cells: Array(9).fill(null)
      },
      turn: 'X'
    };
  }

  render() {
    const { current } = this.state;
    const status = `${this.state.turn}'s turn`;
    return (
      <div id="game">
        <Title title="Tic - Tac - Toe" />
        <div className="status">{status}</div>
        <Board cells={current.cells} />
      </div>
    );
  }
}

export default Game;
