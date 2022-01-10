export default class AllProducts {
  constructor(selector) {
    this.selector = selector;
  }

  template(data) {
    return data
      .map((item) => {
        return `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.name.firstname}</td>
            <td>${item.name.lastname}</td>
            <td>${item.email}</td>
            <td>${item.address.city}</td>
            <td>
            <div class="d-flex">
            <button class="btn btn-sm btn-danger me-1">Delete</button><button class="btn btn-sm btn-info me-1">view</button>
            </div>
            </td>
        </tr>
              `;
      })
      .join("");
  }

  render(data) {
    this.selector.innerHTML = this.template(data);
  }
}
