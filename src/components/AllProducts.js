export default class AllProducts {
  constructor(selector) {
    this.selector = selector;
  }

  template(data) {
    return data
      .map((item) => {
        return `
        <div class="col mb-3">
          <div class="card h-100 shadow">
            <img src="${
              item.image
            }" style="max-height: 150px" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title fw-bold">${item.title}</h5>
              <h5 class="card-title mb-5">$ ${item.price}</h5>
              <button class="btn btn-link position-absolute bottom-0 start-0" data-bs-toggle="collapse" data-bs-target="#id${
                item.id
              }" aria-expanded="false" aria-controls="collapseOne">
              <i class="fas fa-eye"></i>
              </button>
              <button data-id="${
                item.id
              }" class="btn btn-info position-absolute bottom-0 end-0 addProductToCart">
              <i class="fas fa-shopping-cart"></i>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div id="id${
          item.id
        }" class="w-100 accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${item.image}" class="img-fluid rounded-start"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">${item.title}</h5>
                  <h5 class="card-title">Category: ${item.category}</h5>
                  <h5 class="card-title">$ ${item.price}</h5>
                  <p class="card-text mt-3">${item.description}</p>
                  <h5 class="card-title text-warning">
                  ${[...Array(Math.floor(item.rating.rate)).keys()]
                    .map((n) => {
                      return `<i class="fas fa-star"></i>`;
                    })
                    .join("")}<i class="fas fa-star-half"></i>
                  </h5>
                  <h5 class="card-title">Rated ${item.rating.count} times</h5>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
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
  }
}
