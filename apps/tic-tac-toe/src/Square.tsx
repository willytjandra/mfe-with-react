import styles from './Square.module.css'

interface SquareProps {
  value: string
}

// const Square: React.FC<SquareProps> = ({ value }: SquareProps) => (
//   <button className={styles.square} onClick={handleClick}>
//     {value}
//   </button>
// )

const Square: React.FC<SquareProps> = ({ value }: SquareProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log(`clicked ${value}!`)
  }

  return (
    <button className={styles.square} onClick={handleClick}>
      {value}
    </button>
  )
}

export default Square
