import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Code from './components/code/Code'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Code/>
    </>
  )
}

export default App
