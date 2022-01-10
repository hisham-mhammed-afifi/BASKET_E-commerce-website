export default class AllCategories {
  constructor(selector, cb) {
    this.selector = selector;
    this.cb = cb;
  }

  template(data) {
    return `<a data-value="" class="filterByCategory flex-sm-fill text-sm-center nav-link active" aria-current="page">All</a>
    ${data
      .map((item) => {
        return `<a data-value="${item}" class="filterByCategory flex-sm-fill text-sm-center nav-link" aria-current="page">${item}</a>`;
      })
      .join("")}
    `;
  }

  render(data) {
    this.selector.innerHTML = this.template(data);
    this.cb();
  }
}
