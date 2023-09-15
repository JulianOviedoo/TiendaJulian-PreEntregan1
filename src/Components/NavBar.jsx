import Brand from "./Brand"
import CartContainer from "./CartContainer"
import Categoryitem from "./CategoryItem"
import MenuButton from "./MenuButton"

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Brand/>
          <MenuButton/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Categoryitem  IsActive = {true} name="Camisetas" />  
              </li>
              <li className="nav-item">
                <Categoryitem  IsActive = {false} name="Botines" />  
              </li>
              <li className="nav-item">
                <Categoryitem  IsActive = {false} name="Contacto" />  
              </li>
              <li className="nav-item">
                <Categoryitem  IsActive = {false} name="Guantes y Canilleras" />  
              </li>
              <li className="nav-item">
                <Categoryitem  IsActive = {false} name="Promociones" />  
              </li>
            </ul>
          </div>
          <CartContainer/>
        </div>
      </nav>
    )
}

export default NavBar