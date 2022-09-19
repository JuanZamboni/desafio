
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
          <header className="bg-header">
          
  
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>TECHSTORE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>INICIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to=''>NOSOTROS</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='/productos/productos' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/productos/monitor'>Monitores</Link></li>
            <li><Link className="dropdown-item" to='/productos/procesador'>Procesadores</Link></li>
            <li><Link className="dropdown-item" to='/productos/grafica'>Graficas</Link></li>
            <li><Link className="dropdown-item" to='/productos/ram'>Memorias Ram</Link></li>
            <li><Link className="dropdown-item" to='/productos/gabinete'>Gabinetes</Link></li>
            <li><Link className="dropdown-item" to='/productos/fuente'>Fuentes</Link></li>
            <li><Link className="dropdown-item" to='/productos/silla'>Sillas</Link></li>
            <li><Link className="dropdown-item" to='/productos/placa'>Placas Madre</Link></li>
            <li><Link className="dropdown-item" to='/productos/combos'>Combos</Link></li>
            
            
          </ul>
        </li>
        <li className="nav-item">
          
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-primary mx-2" type="submit">Buscar</button>
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit"><CartWidget/></button>
      </form>
    </div>
  </div>
</nav>

          </header>






    )
   }