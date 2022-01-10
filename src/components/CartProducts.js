export default class CartProducts {
  constructor(selector, products) {
    this.selector = selector;
    // this.user = user[0];
    this.products = products;
  }

  template() {
    // return `
    // <div class="card">
    //     <div class="card-body">
    //       <h5 class="card-title">${this.user.firstname} ${this.user.lastname}</h5>
    //       <h5 class="card-title">${this.user.email} - ${this.user.address.city}</h5>
    //       <p class="card-text">${this.user.email}</p>
    //       <a href="#" class="btn btn-primary">Button</a>
    //     </div>
    // </div>
    // `;
    // return this.data[0].products
    //   .map((item) => {
    //     return `
    // <div class="card mb-3">
    //     <div class="row g-0">
    //       <div class="col-md-4">
    //         <img src="..." class="img-fluid rounded-start" alt="..." />
    //       </div>
    //       <div class="col-md-8">
    //         <div class="card-body">
    //           <h5 class="card-title">Card title</h5>
    //           <p class="card-text">
    //             This is a wider card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </p>
    //           <p class="card-text">
    //             <small class="text-muted">Last updated 3 mins ago</small>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    // </div>
    //             `;
    //   })
    //   .join("");
  }

  render() {
    this.selector.innerHTML = this.template();
  }
}
