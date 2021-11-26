import { GetUser } from '../libs/localStorage.js';

function changeMenuIfLoggedIn() {
  if (GetUser('user')) {
    document.querySelector(
      '.navigation'
    ).innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/index.html">SHOUE</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span class="navbar-text">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/index.html"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/products.html">Products</a>
                </li>
                <li class="nav-item">
                  <a class="logOut nav-link" href="#">Log Out</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><i class="fas fa-shopping-cart"></i
                  ></a>
                </li></ul
            ></span>
          </div>
        </div>
      </nav>`;
  } else {
    document.querySelector(
      '.navigation'
    ).innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/index.html">SHOUE</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span class="navbar-text">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/index.html"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/products.html">Products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Log In</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><i class="fas fa-shopping-cart"></i
                  ></a>
                </li></ul
            ></span>
          </div>
        </div>
      </nav>`;
  }
  const logOut = document.querySelector('.logOut');
  if (logOut !== null) {
    logOut.onclick = () => {
      //  Dont want to clear all, still saving the favourited articles.
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = './index.html';
    };
  }
}
changeMenuIfLoggedIn();
