import 'react';
import '../styles/main.css'
import iconOne from '../images/icon_1.png'
import Biodegradable from '../images/biodegradable bag.png'
import Park from '../images/park.png'
import go from '../images/go_6.png'
import bath from '../images/creando-espacios.jpg'

const Main = () => {
    return (
    <>
        <section className="main-section" id="start">
                <h1 className="main-title">Disfruta creando espacios</h1>
            <div>
                <button className="button-buy-1">
                    <a href="https://adalab.es/" target="_blank">Comprar ahora</a>
                </button>
            </div>
        </section>

        <section className="benefits-section">
            <h2 className="benefits-title">Volverse organizado se siente mejor con OPEN SPACES</h2>
            <div className="benefits-container">
                <div className="benefit-1">
                    <div className="benefit-icon">
                        <img src={iconOne} alt="icono de una mesa con varios jarrones encima"/>
                    </div>
                    <h3 className="benefit-subtitle">Lo que necesitas</h3>
                    <p className="benefit-paragraph">Una línea de productos diseñados para todos tus espacios</p>
                </div>
                <div className="benefit-2">
                    <div className="benefit-icon">
                        <img src={Biodegradable} alt="icono de una bolsa de reciclaje"/>
                    </div>
                    <h3 className="benefit-subtitle">Materias primas sustentables</h3>
                    <p className="benefit-paragraph">Todos los productos con materias primas sustentables</p>
                </div>
                <div className="benefit-3">
                    <div className="benefit-icon">
                        <img src={Park} alt="icono de un cartel que indica la dirección de un parque a la derecha"/>
                    </div>
                    <h3 className="benefit-subtitle">Guía</h3>
                    <p className="benefit-paragraph">Soporte y asesoramiento para ayudarte con tu objetivo</p>
                </div>
            </div>
        </section>

        <section className="shipment-section">
            <img src={go} alt="icono de una furgoneta de transporte"/>
            <h2 className="shipment-title">Envío gratis garantizado</h2>
            <p>Envío gratis en compras desde 100€</p>
            <button className="button-buy-2">
                <a href="https://adalab.es/" target="_blank">Comprar ahora</a>
            </button>
        </section>
        
        <section className="enjoy-section">
            <div className="enjoy-container">
                <h2 className="enjoy-title">Disfruta creando espacios</h2>
                <p className="enjoy-paragraph">Una línea de productos diseñados para todos tus espacios</p>
                <div>
                    <button className="button-buy-3">
                        <a href="https://adalab.es/" target="_blank">Comprar ahora</a>
                    </button>
                </div>
            </div>
            <div className="bath-image-box">
                <img className="bath-image" src={bath} alt="detalle de un cuarto de baño con dos cestas en el suelo con papel higiénico y toallas, y una papelera al fondo"/>
            </div>
        </section>
    </>
    )
}

export default Main;