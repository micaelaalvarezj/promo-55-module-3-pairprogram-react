import 'react'
import logo from '../images/logo.png'
import menu from '../images/menu-icon.png'
import '../styles/app.css'
import { useState } from 'react'

const App = () => {
  const [dark, setDark] = useState("");

  const handleClick = (event) => {
    console.log("Has hecho click");
  };

  return (
    <>
    <header className="header-container"> 
        <img src={logo} alt="Logo Spotify" className="logo"/>
        <img src={menu} alt="Icono menú" className="menu"/>
        <ul class="links">
            <li><a href="">Premium</a></li>
            <li><a href="">Ayuda</a></li>
            <li><a href="">Descargar</a></li>
            <li><a href="">|</a></li>
            <li><a href="">Registrarse</a></li>
            <li><a href="">Iniciar sesión</a></li>
        </ul>
    </header>
    <div className="light-mode">
      <button className="dark-name-button" onClick={handleClick}>Des/activar modo oscuro</button>
      <p className="dark-mode-text">Tienes {dark}activado el modo oscuro</p>
    </div>
    </>
  )
}

export default App
