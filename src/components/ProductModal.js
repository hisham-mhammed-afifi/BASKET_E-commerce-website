export default class ProductModal {
  constructor(selector, item) {
    this.selector = selector;
    this.item = item;
  }

  template() {
    return `
    <div class="modal fade" id="id${this.item.id}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="${this.item.image}"
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title fw-bolder">${this.item.title}</h5>
                    <h5 class="card-title">${this.item.price}</h5>
                    <p class="card-text">${this.item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
  }

  render() {
    this.selector.innerHTML = this.template();
  }
}
