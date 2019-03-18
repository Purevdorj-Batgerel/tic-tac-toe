import React from 'react';
import Title from '../Title/Title.jsx';
import Board from '../Board/Board.jsx';
import ControlPanel from '../ControlPanel/ControlPanel.jsx';

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

    if (this.calcWinner(newArr) || oldArr[i] !== null) {
      return;
    }

    newArr[i] = this.state.turn;

    this.setState({
      history: [...this.state.history, { cells: oldArr }],
      current: { cells: newArr },
      turn: this.switchTurn()
    });
  }

  calcWinner(cells) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return true;
      }
    }
    return false;
  }

  resetHandler() {
    this.setState({
      history: [],
      current: {
        cells: Array(9).fill(null)
      },
      turn: 'X'
    });
  }

  backHandler() {
    this.setState({
      history: this.state.history.slice(0, -1),
      current: this.state.history[this.state.history.length - 1],
      turn: this.switchTurn()
    });
  }

  render() {
    const { current } = this.state;
    let status;
    let finish = this.calcWinner(current.cells);

    if (finish) {
      status = `${this.switchTurn()} won`;
    } else {
      if (this.state.history.length == 9) {
        status = 'TIE';
        finish = true;
      } else {
        status = `${this.state.turn}'s turn`;
      }
    }

    return (
      <div id="game">
        <Title title="Tic - Tac - Toe" />
        <div className="status">{status}</div>
        <Board cells={current.cells} clickHandler={i => this.clickHandler(i)} />
        <ControlPanel
          resetHandler={_ => this.resetHandler()}
          backHandler={_ => this.backHandler()}
          backDisabled={this.state.history.length == 0}
        />
      </div>
    );
  }
}

export default Game;
