import React, { useState } from 'react';

const FormularioProducto = ({ agregarProducto }) => {
  const initialState = {
    nombre: '',
    precio: '',
    stock: '',
    imagen: '',
  };

  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarProducto(formValues);

    setFormValues(initialState);
  };

  return (
    <div>
      <h2>Crear Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="text"
            name="precio"
            value={formValues.precio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Stock:
          <input
            type="text"
            name="stock"
            value={formValues.stock}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Imagen:
          <input
            type="text"
            name="imagen"
            value={formValues.imagen}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar Producto</button>
      </form>
    </div>
  );
};

export default FormularioProducto;