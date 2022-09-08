import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
      
    <div className="divi1">

        <div className="box">
          <figure>
            <Link to="/">

              <img src="Copia-de-logots.jpg" alt="logo tech store"></img>

            </Link>
          </figure>
        </div>

        <div className="box">
          <h2>MÁS INFORMACIÓN</h2>
          <p> Si tienes alguna duda escribinos a info@techstore.com</p>
          <p> Tambien puedes enviar un mensaje a nuestro Whatsapp.</p>
        </div>

        <div className="box">
          <h2>NUESTRAS REDES</h2>
          <div className="redes">
            <Link to="/" className="fa fa-facebook"></Link>
            <Link to="/" className="fa fa-instagram"></Link>
            <Link to="/" className="fa fa-youtube"></Link>
            <Link to="/" className="fa fa-whatsapp"></Link>
          </div>

        </div>

    </div>

    <div className="divi2">
      <small>&copy; 2022 <b>Tech Store</b> - Todos los Derechos Reservados.</small>
    </div>
 </footer>
  )
}

export default Footer
      
      
   