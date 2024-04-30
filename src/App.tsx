/*import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-brand">DressingShop</div>
        <div className="icons">
          <div
            className="icon"
            onClick={() => (window.location.href = 'checkout.html')}
          >
            <img
              src="shopping_cart_icon.svg"
              alt="Shopping Cart"
              width="30px"
            />
          </div>
          <div className="icon" onClick={toggleMenu}>
            <img src="hamburger_menu_icon.svg" alt="Menu" width="30px" />
          </div>
        </div>
      </div>

      <div className="background-image">
        <div className="highlighted-text">
          Busca la ropa que quieras en DressingShop
        </div>
      </div>

      <div className="highlighted-text">Lo mas destacado</div>
      <div className="buttons-container">
        <button
          className="button"
          onClick={() => (window.location.href = 'deportivo.jsx')}
        >
          Deportivo
        </button>
        <button
          className="button"
          onClick={() => (window.location.href = 'aesthetic.jsx')}
        >
          Aesthetic
        </button>
        <button
          className="button"
          onClick={() => (window.location.href = 'profesional.jsx')}
        >
          Profesional
        </button>
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => (window.location.href = 'deportivo.jsx')}>
            Deportivo
          </li>
          <li onClick={() => (window.location.href = 'aesthetic.jsx')}>
            Aesthetic
          </li>
          <li onClick={() => (window.location.href = 'profesional.jsx')}>
            Profesional
          </li>
          <li onClick={() => (window.location.href = 'profesional.jsx')}>
            Estilo Urbano
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import './App.css';

function ProductTable() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <ProductDetail desc="Producto 1" precio="Q100" imagen = "camisa2.png"/>
          </td>
          <td>
            <ProductDetail desc="Producto 2" precio="Q200"  imagen = "camisa3.png"/>
          </td>
          <td>
            <ProductDetail desc="Producto 3" precio="Q300"  imagen = "pantaloneta2.png" />
          </td>
        </tr>
        <tr>
          <td>
            <ProductDetail desc="Producto 4" precio="Q130"  imagen = "pants.png"/>
          </td>
          <td>
            <ProductDetail desc="Producto 5" precio="Q550"  imagen = "camisa4.png" />
          </td>
          <td>
            <ProductDetail desc="Producto 6" precio="Q600"   imagen = "camisa2.png" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function ProductDetail({ desc, precio, imagen }) {
  return (
    <div>
      <img src={imagen} width="100" height="100"></img>{' '}
      <h3>{desc}</h3>
      <h5>{precio}</h5>

      <button className="cartButton">Agregar al carrito</button>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-brand">DressingShop</div>
        <div className="icons">
          <div
            className="icon"
            onClick={() => (window.location.href = 'checkout.html')}
          >
            <img
              src="shopping_cart_icon.svg"
              alt="Shopping Cart"
              width="30px"
            />
          </div>
          <div className="icon" onClick={toggleMenu}>
            <img src="hamburger_menu_icon.svg" alt="Menu" width="30px" />
          </div>
        </div>
      </div>

      <div className="producttable">
        {/*<center>
          <table>
            <tr>
              <td>
                {' '}
                <img src="pants.png" width="100" height="100"></img>{' '}
                <h2> Producto 1 </h2> <h5>Descripcion</h5>{' '}
                <button className="cartButton">Agregar al carrito</button>{' '}
              </td>
              <td>
                {' '}
                <img src="camisa2.png" width="100" height="100"></img>{' '}
                <h2> Producto 2 </h2> <h5>Descripcion</h5>{' '}
                <button className="cartButton">Agregar al carrito</button>{' '}
              </td>
              <td>
                {' '}
                <img src="camisa3.png" width="100" height="100"></img>{' '}
                <h2> Producto 3 </h2> <h5>Descripcion</h5>{' '}
                <button className="cartButton">Agregar al carrito</button>
              </td>
            </tr>

            <tr>
              <td>
                {' '}
                <img src="pantaloneta2.png" width="100" height="100"></img>{' '}
                <h2> Producto 4 </h2> <h5>Descripcion</h5>{' '}
                <button className="cartButton">Agregar al carrito</button>{' '}
              </td>
              <td>
                {' '}
                <img src="camisa4.png" width="100" height="100"></img>{' '}
                <h2> Producto 5 </h2> <h5>Descripcion</h5>
                <button className="cartButton">Agregar al carrito</button>{' '}
              </td>
              <td>
                {' '}
                <img src="camisa4.png" width="100" height="100"></img>{' '}
                <h2> Producto 6 </h2> <h5>Descripcion</h5>{' '}
                <button className="cartButton">Agregar al carrito</button>
              </td>
            </tr>
          </table>
        </center>*/}
        <ProductTable />
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => (window.location.href = 'deportivo.jsx')}>
            Deportivo
          </li>
          <li onClick={() => (window.location.href = 'aesthetic.jsx')}>
            Aesthetic
          </li>
          <li onClick={() => (window.location.href = 'profesional.jsx')}>
            Profesional
          </li>
          <li onClick={() => (window.location.href = 'profesional.jsx')}>
            Estilo Urbano
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
