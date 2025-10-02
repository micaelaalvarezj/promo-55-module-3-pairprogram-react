import 'react'
import '../styles/app.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("light");

const handleIncrement = () => {
    return setCount(count + 1);
  }

    const handleReduce = () => {
    if (count > 0) {
    return setCount(count - 1);
    }
  }

  const handleReset = () => {
    return setCount(0);
  }

  const handleClickMode = () => {
    if (mode === "light") {
      return setMode("dark");
    } else {
      return setMode("light");
    }
  }

  return (
    <>

    <Header />

    <Main />

    <Footer />


    <div className= {mode}>
        <button onClick={handleClickMode}>{mode === "light" ? "Activar modo oscuro" : "Desactivar modo oscuro"}</button>
        <p>{mode === "dark" ? "Tienes activado el modo oscuro" : ""}</p>
        <p>Contador: {count}</p>
        <button onClick={handleIncrement}>Incrementar contador</button>
        <button onClick={handleReduce}>Reducir contador</button>
        <button onClick={handleReset}>Reset</button>
    </div>
    </>

  )
}

export default App
