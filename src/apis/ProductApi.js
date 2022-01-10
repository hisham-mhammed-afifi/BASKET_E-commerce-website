import Api from "./Apis.js";

export default class ProductApi extends Api {
  constructor() {
    super("products");
  }

  getCategories = async () => {
    const res = await fetch(`${this.url}/categories`);
    return await res.json();
  };
  getCategoryProducts = async (category) => {
    const res = await fetch(`${this.url}/category/${category}`);
    return await res.json();
  };
}
