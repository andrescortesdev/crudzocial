class Sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="p-2">
            <div class="list-group">
                <h4 class="text-center list-group-item bg-success text-white">Menu</h4> 
                <a href="https://andrescortesdev.github.io/crudzocial/pages/users/images.html" class="list-group-item list-group-item-action">Imagenes</a>
                <a href="https://andrescortesdev.github.io/crudzocial/pages/users/notes.html" class="list-group-item list-group-item-action">Notas</a>
                <a href="https://andrescortesdev.github.io/crudzocial/pages/users/logs.html" class="list-group-item list-group-item-action">Logs</a>
            </div>
        </div>
      `;
    }
}
customElements.define('sidebar-left', Sidebar);