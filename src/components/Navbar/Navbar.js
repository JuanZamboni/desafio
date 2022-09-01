
import "./Navbar.css"
import CartWidget from "./CartWidget"

export const Navbar = () => {
    return (
          <header className="bg-header">
          
  
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="../index.js">TECHSTORE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../index.js">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../index.js">NOSOTROS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="../index.js" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="../index.js">PRODUCTOS</a></li>
            <li><a className="dropdown-item" href="../index.js">TODOS LOS PRODUCTOS</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-primary" type="submit">Buscar</button>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit"><CartWidget/></button>
      </form>
    </div>
  </div>
</nav>

           

          </header>
    )
   }