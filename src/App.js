import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import FormularioProducto from './FormularioProducto';
import TablaProducto from './TablaProducto';

const App = () => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/formulario"
            element={<FormularioProducto agregarProducto={agregarProducto} />}
          />
          <Route
            path="/tabla"
            element={<TablaProducto productos={productos} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;