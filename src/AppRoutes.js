import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormularioProducto from './FormularioProducto';
import TablaProductos from './TablaProducto';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Inicio</div>} />
      <Route path="/formulario" element={<FormularioProducto />} />
      <Route path="/tabla" element={<TablaProductos />} />
    </Routes>
  );
};

export default AppRoutes;