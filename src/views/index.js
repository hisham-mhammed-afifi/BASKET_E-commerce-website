import ProductApi from "../apis/ProductApi.js";
import AllProducts from "../components/AllProducts.js";
import AllCategories from "../components/AllCategories.js";
import Pagination from "../components/Pagination.js";

//  ---   APIs   ---
const productApi = new ProductApi();
let products = await productApi.getAll();
const categories = await productApi.getCategories();

// ---   selectors   ---
const allProductsID = document.getElementById("allProducts");
const allCategoriesID = document.getElementById("allCategories");

//    ---   view products in HTML   ---
const paginateProducts = paginate(products, 8, 1);
const allProductsHTML = new AllProducts(allProductsID);
allProductsHTML.render(paginateProducts);

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

      const filteredProductsHTML = new AllProducts(allProductsID);
      filteredProductsHTML.render(paginate(filteredProducts, 8, 1));
    });
  });
});
allCategoriesHTML.render(categories);

// *** *** *** filter by price change *** *** ***

const priceValueID = document.getElementById("priceValue");
const filterByPriceRangeID = document.getElementById("filterByPriceRange");
filterByPriceRangeID.addEventListener("input", filterByPriceRange);

function filterByPriceRange(e) {
  filteredProducts = [...products];
  filteredProducts = filteredProducts.filter((p) => {
    return p.price <= e.target.value;
  });

  priceValueID.innerHTML = e.target.value;

  const filteredProductsHTML = new AllProducts(allProductsID);
  filteredProductsHTML.render(filteredProducts);
}
// ---------------------------------------------------------------------------
// ------------------------   Pagination function   --------------------------
// ---------------------------------------------------------------------------

const paginationID = document.getElementById("pagination");
let pageNumbers = [...Array(Math.round(products.length / 8)).keys()].map(
  (n) => n + 1
);

const paginatedProductsHTML = new Pagination(paginationID);

paginatedProductsHTML.render(pageNumbers);

Array.from(paginationID.children).forEach((pageBtn) => {
  pageBtn.addEventListener("click", () => {
    const paginateProducts = paginate(
      products,
      8,
      pageBtn.children[0].innerHTML
    );

    const filteredProductsHTML = new AllProducts(allProductsID);
    filteredProductsHTML.render(paginateProducts);
  });
});

function paginate(products, productsPerPage, pageNum) {
  const idx = (pageNum - 1) * productsPerPage;
  return products.slice(idx, idx + productsPerPage);
}

// ---------------------------------------------------------------------------
// ------------------------   search section   --------------------------
// ---------------------------------------------------------------------------

const searchProductID = document.getElementById("searchProduct");

searchProductID.addEventListener("input", searchForProduct);

function searchForProduct(e) {
  const searchInput = e.target.value;
  let filteredBySearch = [...paginate(filteredProducts, 8, 1)];
  filteredBySearch = filteredBySearch.filter((p) => {
    return p.title.toLowerCase().includes(searchInput);
  });

  const filteredProductsHTML = new AllProducts(allProductsID);
  filteredProductsHTML.render(filteredBySearch);
}

// ====================== add Product to cart ========================

const addProductToCartID = document.querySelectorAll(".addProductToCart");

addProductToCartID.forEach((addBtn) => {
  addBtn.addEventListener("click", (e) => {
    let productToAdd = [...products];
    productToAdd = productToAdd.find((p) => {
      return p.id == e.target.dataset.id;
    });

    productToAdd.QTY = 1;
    productToAdd.totalPrice = productToAdd.price * productToAdd.QTY;

    localStorage.setItem(e.target.dataset.id, JSON.stringify(productToAdd));
  });
});

// >>>>>>>>>>>>>>>>>>>   login BTN    <<<<<<<<<<<<<<<<<<<<<<<<<<<

const loginBtnID = document.getElementById("loginBtn");
let userEmail = sessionStorage.getItem("logedIn");
if (userEmail) {
  loginBtnID.innerHTML = `<i class="fas fa-user-alt"></i> ${userEmail}`;
  // id("logout").innerHTML = `LOGOUT`;
  // id("logout").onclick = function () {
  //   sessionStorage.removeItem("logedIn");
  //   location.reload();
  // };
}
