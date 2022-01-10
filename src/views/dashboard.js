import UserApi from "../apis/UserApi.js";
import ProductApi from "../apis/ProductApi.js";
import AllUsers from "../components/AllUsers.js";
import DashboardProducts from "../components/DashboardProducts.js";
import AllCategories from "../components/AllCategories.js";

//  ---   APIs   ---
const productApi = new ProductApi();
const userApi = new UserApi();
const users = await userApi.getAll();
const products = await productApi.getAll();

const categories = await productApi.getCategories();

// ---   selectors   ---
const allProductsID = document.getElementById("allProducts");
const allCategoriesID = document.getElementById("allCategories");
const allUsersID = document.getElementById("allUsers");

//    ---   view in HTML   ---
const allProductsHTML = new DashboardProducts(allProductsID);
allProductsHTML.render(products);
const allUsersHTML = new AllUsers(allUsersID);
allUsersHTML.render(users);
let filteredProducts = [...products];
const allCategoriesHTML = new AllCategories(allCategoriesID, () => {
  const filterByCategoryCLASS = document.querySelectorAll(".filterByCategory");

  filterByCategoryCLASS.forEach((cat) => {
    cat.addEventListener("click", (e) => {
      filterByCategoryCLASS.forEach((c) => {
        c.classList.remove("active");
      });
      e.target.classList.add("active");
      filteredProducts = [...products];
      if (e.target.dataset.value) {
        filteredProducts = filteredProducts.filter((p) => {
          return p.category == e.target.dataset.value;
        });
      }

      const filteredProductsHTML = new DashboardProducts(allProductsID);
      filteredProductsHTML.render(filteredProducts);
    });
  });
});
allCategoriesHTML.render(categories);

// ------------------------------------------------------------------
// \\//\\//\\//\\//\\//   CHANGING THEMES    //\\//\\//\\//\\//\\//\\
// ------------------------------------------------------------------
const themesID = document.getElementById("themes");

Array.from(themesID.children).forEach((themeBtn) => {
  themeBtn.addEventListener("click", () => {
    localStorage.setItem("yourthemeis", themeBtn.dataset.value);
    location.reload();
  });
});
// -------------------------------------------------------------------
