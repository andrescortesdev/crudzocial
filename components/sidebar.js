class Sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="p-2">
            <div class="list-group">
                <h4 class="text-center list-group-item bg-success text-white">Menu</h4> 
                <a href="#" class="list-group-item list-group-item-action">Imagenes</a>
                <a href="#" class="list-group-item list-group-item-action">Notas</a>
                <a href="#" class="list-group-item list-group-item-action">Logs</a>
            </div>
        </div>
      `;
    }
}
customElements.define('sidebar-left', Sidebar);