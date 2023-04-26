import { useState } from 'react'
import styles from './Board.module.css'
import Square from './Square'

const Board: React.FC = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null))

  const handleClick = (index: number): void => {
    if (squares[index] !== null || calculateWinner() !== null) {
      return
    }

    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[index] = 'X'
      setXIsNext(false)
    } else {
      nextSquares[index] = 'O'
      setXIsNext(true)
    }

    setSquares(nextSquares)
  }

  const calculateWinner = (): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }

  const winner = calculateWinner()
  let status
  if (winner !== null) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div>{status}</div>
      <div className={styles.boardRow}>
        <Square
          value={squares[0]}
          onSquareClicked={() => {
            handleClick(0)
          }}
        />
        <Square
          value={squares[1]}
          onSquareClicked={() => {
            handleClick(1)
          }}
        />
        <Square
          value={squares[2]}
          onSquareClicked={() => {
            handleClick(2)
          }}
        />
      </div>
      <div className={styles.boardRow}>
        <Square
          value={squares[3]}
          onSquareClicked={() => {
            handleClick(3)
          }}
        />
        <Square
          value={squares[4]}
          onSquareClicked={() => {
            handleClick(4)
          }}
        />
        <Square
          value={squares[5]}
          onSquareClicked={() => {
            handleClick(5)
          }}
        />
      </div>
      <div className={styles.boardRow}>
        <Square
          value={squares[6]}
          onSquareClicked={() => {
            handleClick(6)
          }}
        />
        <Square
          value={squares[7]}
          onSquareClicked={() => {
            handleClick(7)
          }}
        />
        <Square
          value={squares[8]}
          onSquareClicked={() => {
            handleClick(8)
          }}
        />
      </div>
    </>
  )
}

export default Board
