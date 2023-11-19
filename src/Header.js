import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/formulario" activeClassName="active">
              Formulario Producto
            </NavLink>
          </li>
          <li>
            <NavLink to="/tabla" activeClassName="active">
              Tabla Producto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;