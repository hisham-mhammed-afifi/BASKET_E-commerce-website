import Api from "./Apis.js";

export default class CartApi extends Api {
  constructor() {
    super("carts");
  }
  getDateRange = async (start = "", end = "") => {
    const res = await fetch(`${this.url}/startdate=${start}&enddate=${end}`);
    return await res.json();
  };
  getUserCart = async (userId) => {
    const res = await fetch(`${this.url}/user/${userId}`);
    return await res.json();
  };
  addToCart = async (userProducts) => {
    const res = await fetch(`${this.url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProducts),
    });
    return await res.json();
  };
  updateCart = async (cartId, userProducts) => {
    const res = await fetch(`${this.url}/${cartId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProducts),
    });
    return await res.json();
  };
  deleteCart = async (cartId) => {
    const res = await fetch(`${this.url}/${cartId}`, {
      method: "DELETE",
    });
    return await res.json();
  };
}
