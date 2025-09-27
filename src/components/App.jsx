import 'react'
import '../styles/app.css'

const App = () => {
  return (
    <header className="header-container"> 
        <img src="./images/logo.png" alt="Logo Spotify" className="logo"/>
        <img src="./images/menu-icon.png" alt="Icono menú" className="menu"/>
        <ul class="links">
            <li><a href="">Premium</a></li>
            <li><a href="">Ayuda</a></li>
            <li><a href="">Descargar</a></li>
            <li><a href="">|</a></li>
            <li><a href="">Registrarse</a></li>
            <li><a href="">Iniciar sesión</a></li>
        </ul>
    </header>
  )
}

export default App
