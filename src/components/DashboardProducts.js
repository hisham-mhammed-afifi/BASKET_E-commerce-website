export default class DashboardProducts {
  constructor(selector) {
    this.selector = selector;
  }

  template(data) {
    return data
      .map((item) => {
        return `
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button bg-secondary text-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id${item.id}" aria-expanded="false" aria-controls="id${item.id}">
            ${item.title} - ${item.price}
          </button>
        </h2>

        <div id="id${item.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${item.image}" class="img-fluid rounded-start"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-bolder">${item.title}</h5>
                <h5 class="card-title">${item.category}</h5>
                <h5 class="card-title">${item.price}</h5>
                <p class="card-text mt-3">${item.description}</p>
                <h5 class="card-title">${item.rating.rate}</h5>
                <h5 class="card-title">Rated ${item.rating.count} times</h5>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <div class="d-block">
                <button class="btn btn-sm btn-danger my-1 mx-3">Delete</button><button class="btn btn-sm btn-info me-1">update</button>
                </div>
              </div>
            </div>
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
