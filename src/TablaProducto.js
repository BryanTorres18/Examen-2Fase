import React, { useState } from 'react';

const TablaProducto = ({ productos }) => {
  const [filtro, setFiltro] = useState('');

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const productosFiltrados = productos.filter((producto) => {
    return (
      producto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      producto.precio.toString().includes(filtro) ||
      producto.stock.toString().includes(filtro) ||
      producto.imagen.toLowerCase().includes(filtro.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div>
        <label>
          Filtrar:
          <input type="text" value={filtro} onChange={handleFiltroChange} />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{producto.imagen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProducto;