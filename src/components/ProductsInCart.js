export default class ProductsInCart {
  constructor(selector, cb) {
    this.selector = selector;
    this.cb = cb;
  }

  template(data) {
    return data
      .map((item) => {
        return `
          <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${item.image}" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">Price: $${item.price}</p>
                <div class="d-block">
                    <button data-id="${item.id}" class="btn btn-primary decreaseQTY">-</button>
                    <span id="qty${item.id}">${item.QTY}</span>
                    <button data-id="${item.id}" class="btn btn-primary increaseQTY">+</button>
                </div>
                <div class="d-block mt-3">
                    <button data-id="${item.id}" class="btn btn-danger removeProduct">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
                `;
      })
      .join("");
  }

  render(data) {
    this.selector.innerHTML = this.template(data);
    this.cb();
  }
}
