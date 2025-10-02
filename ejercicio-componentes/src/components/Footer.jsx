import 'react';
import '../styles/footer.css'
import linkedin from '../images/brand-linked-in.png'
import instagram from '../images/brand-instagram.png'
import twitter from '../images/brand-twitter.png'
import arrow from '../images/arrow-short-up.png'


const Footer = () => {
    return (
    <footer class="footer">
        <div class="footer-section">
            <h3 class="footer-title">Tienda</h3>
            <a class="footer-link" href="https://adalab.es/">Productos</a>
            <a class="footer-link" href="https://adalab.es/">Cajoneras</a>
            <a class="footer-link" href="https://adalab.es/">Para toda la casa</a>
            <a class="footer-link" href="https://adalab.es/">Habitaciones</a>
        </div>
        <div class="footer-section">
            <h3 class="footer-title">Nosotros</h3>
            <a class="footer-link" href="https://adalab.es/">Nuestra guía</a>
            <a class="footer-link" href="https://adalab.es/">Nuestro diseño</a>
            <a class="footer-link" href="https://adalab.es/">Nuestra historia</a>
            <a class="footer-link" href="https://adalab.es/">Ayuda</a>
        </div>
        <div class="footer-section">
            <h3 class="footer-title">Contacto</h3>
            <p class="contact">ayuda@openspaces.com <br/> Socios</p>
                <div class="social-icons">
                    <img src={linkedin} alt="icono Linkedin"/>
                    <img src={instagram} alt="icono Instagram"/>
                    <img src={twitter} alt="icono Twitter"/>
                </div>
        </div>
        <div class="go-up">
            <a href="#start">
                <img src={arrow} alt="icono flecha hacia arriba"/>
            </a>
        </div>
    </footer>
    )
}
export default Footer;