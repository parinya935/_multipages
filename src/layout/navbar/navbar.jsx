import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar({ products, carts, tab, setTab, setToken }) {
  return (
    <div className="navbar-container">
      <Link to="/home">
        <button
          className={
            "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("home")}
        >
          Home
        </button>
      </Link>
      <Link to="/animation">
        <button
          className={
            "btn " +
            (tab === "animation" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("animation")}
        >
          Animation
        </button>
      </Link>
      <Link to="/todo">
        <button
          className={
            "btn " + (tab === "todo" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("todo")}
        >
          Todo
        </button>
      </Link>
      <Link to="/calculator">
        <button
          className={
            "btn " +
            (tab === "calculator" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
        >
          Calculator
        </button>
      </Link>
      <Link to="/component">
        <button
          className={
            "btn " + (tab === "component" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("component")}
        >
          Component
        </button>
      </Link>
      <Link to="/product">
        <button
          className={
            "btn " + (tab === "product" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("product")}
        >
          Product ({products.length})
        </button>
      </Link>
      <Link to="/cart">
        <button
          style={{ position: "relative" }}
          className={
            " btn " +
            (tab === "cart" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("cart")}
        >
          Carts {carts.length > 0 && <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carts.length < 10 ? carts.length : "9+"}
            <span class="visually-hidden">unread messages</span>
          </span>} 
          
        </button>
      </Link>
      <Link>
        <button className="btn btn-outline-danger" onClick={() => setToken('')}>Logout</button>
      </Link>
    </div>
  );
}

export default Navbar;
