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

  switchTurn() {
    if (this.state.turn === 'X') {
      return 'O';
    }
    return 'X';
  }

  clickHandler(i) {
    let oldArr = [...this.state.current.cells];
    let newArr = [...this.state.current.cells];

    if (oldArr[i] !== null) {
      return;
    }

    newArr[i] = this.state.turn;

    this.setState({
      history: [...this.state.history, { cells: oldArr }],
      current: { cells: newArr },
      turn: this.switchTurn()
    });
  }

  render() {
    const { current } = this.state;
    const status = `${this.state.turn}'s turn`;
    return (
      <div id="game">
        <Title title="Tic - Tac - Toe" />
        <div className="status">{status}</div>
        <Board cells={current.cells} clickHandler={i => this.clickHandler(i)} />
      </div>
    );
  }
}

export default Game;
