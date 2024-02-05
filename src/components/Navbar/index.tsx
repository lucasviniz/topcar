import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <h1 className="nav-logo">TopCar</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="link">Catalog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
