import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  interface User{
    name:string,
    id:number
  }
  const create_user = ():User => {
    const user:User = {
      name:"Gio",
      id:1
    }
    return user; 
  }
  return (
    <>
     <div>Hello world</div>
    </>
  )
}

export default App
