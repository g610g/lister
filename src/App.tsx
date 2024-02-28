import "./index.css"
import "./App.css"
import Header from "./components/Header"
function App() {
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
     <div><Header/></div>
    </>
  )
}

export default App
