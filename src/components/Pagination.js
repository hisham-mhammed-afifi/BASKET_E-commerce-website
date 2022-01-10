export default class Pagination {
  constructor(selector) {
    this.selector = selector;
  }

  template(data) {
    return data
      .map((item) => {
        return `
          <li class="page-item active" aria-current="page">
            <span class="page-link">${item}</span>
          </li>
                `;
      })
      .join("");
  }

  render(data) {
    this.selector.innerHTML = this.template(data);
  }
}
