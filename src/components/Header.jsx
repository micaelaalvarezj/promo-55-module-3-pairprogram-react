import 'react';
import '../styles/header.css'
import logo from '../images/logo.png'
import menu from '../images/menu-hamburger.png'


const Header = () => {
    return (
        <header className="header">
            <div className="menu-hamburger">
                <a href="https://adalab.es/">
                    <img src={menu} alt="icono de menú"/>
                </a>
            </div>
            <div className="menu-desktop">
                <a>Productos</a>
                <a>Colecciones</a>
                <a>Tienda</a>
                <a>Inicio</a>
            </div>
            <div className="logo">
                <img src={logo} alt="logo de Open Spaces"/>
            </div>
        </header>  
    )
}

export default Header;

