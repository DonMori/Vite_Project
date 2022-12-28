import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/donmori" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/92599574?v=4" className="pfp" alt="Profile Picture" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2><code>Aprendendo sobre Vim e React!</code></h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cliques {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </div>
  )
}

export default App
