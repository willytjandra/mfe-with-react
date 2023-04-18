import { lazy } from 'react'

const RemoteApp = lazy(async () => await import('MFE1/App'))

const App: React.FC = () => (
  <div>
    <h1>Hello from Host</h1>
    <div>
      <RemoteApp />
    </div>
  </div>
)

export default App
