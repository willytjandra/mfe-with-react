import styles from './Square.module.css'

interface SquareProps {
  value: string | null
  onSquareClicked: () => void
}
const Square: React.FC<SquareProps> = ({ value, onSquareClicked }: SquareProps) => (
  <button className={styles.square} onClick={onSquareClicked}>
    {value}
  </button>
)

export default Square
