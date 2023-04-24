import { lazy } from 'react'

const RemoteApp = lazy(async () => await import('MFE1/App'))
const TicTacToeApp = lazy(async () => await import('TICTACTOE/App'))

const App: React.FC = () => (
  <div>
    <h1>Hello from Host</h1>
    <div>
      <RemoteApp />
    </div>
    <div>
      <TicTacToeApp />
    </div>
  </div>
)

export default App
