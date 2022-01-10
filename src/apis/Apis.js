export default class Api {
  constructor(model) {
    this.url = `https://fakestoreapi.com/${model}`;
  }
  getAll = async () => {
    const res = await fetch(this.url);
    return await res.json();
  };

  getOne = async (id) => {
    const res = await fetch(`${this.url}/${id}`);
    return await res.json();
  };
  getLimit = async (limit) => {
    const res = await fetch(`${this.url}?limit=${limit}`);
    return await res.json();
  };
  sort = async (type) => {
    const res = await fetch(`${this.url}?sort=${type}`);
    return await res.json();
  };
  add = async (data) => {
    const res = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  };
  update = async (id, data) => {
    const res = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  };
  remove = async (id) => {
    const res = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  };
}
