class NavbarTop extends HTMLElement {
    connectedCallback() {
        const brand = this.getAttribute('brand');
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">${brand}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Imagenes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Notas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Logs</a>
                    </li>
                    
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="https://api.dicebear.com/7.x/initials/svg?seed=Robinson+Cortes" class="rounded-circle" width="40px"> Robinson Andres Cortes
                        </a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Perfil</a></li>
                        <li><a class="dropdown-item" href="#">Cerrar sesion</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      `;
    }
}
customElements.define('navbar-top', NavbarTop);