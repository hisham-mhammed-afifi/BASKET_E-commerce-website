import ProductsInCart from "../components/ProductsInCart.js";

const userCartID = document.getElementById("userCart");
const totalPriceID = document.getElementById("totalPrice");

let products = getProductsInLocalstorage();

const userCartHTML = new ProductsInCart(userCartID, () => {
  const increaseQTYID = document.querySelectorAll(".increaseQTY");
  const decreaseQTYID = document.querySelectorAll(".decreaseQTY");
  const removeProductID = document.querySelectorAll(".removeProduct");

  increaseQTYID.forEach((increaseQTYIDBTN) => {
    // **************** increase QTY BTN ************************
    increaseQTYIDBTN.addEventListener("click", (e) => {
      const product = getProductsInLocalstorage().find((p) => {
        return p.id == e.target.dataset.id;
      });
      product.QTY += 1;
      product.totalPrice = product.price * product.QTY;
      localStorage.setItem(product.id, JSON.stringify(product));
      const qtyID = document.getElementById(`qty${e.target.dataset.id}`);
      qtyID.innerHTML = product.QTY;
      subTotalID.innerHTML = getTotal().toFixed(2);
      totalPriceID.innerHTML = (getTotal() * 1.4).toFixed(2);
    });
  });

  decreaseQTYID.forEach((decreaseQTYIDBTN) => {
    // **************** decrease QTY BTN ************************
    decreaseQTYIDBTN.addEventListener("click", (e) => {
      const product = getProductsInLocalstorage().find((p) => {
        return p.id == e.target.dataset.id;
      });
      product.QTY < 2 ? (product.QTY = 1) : (product.QTY -= 1);
      product.totalPrice = product.price * product.QTY;
      localStorage.setItem(product.id, JSON.stringify(product));
      const qtyID = document.getElementById(`qty${e.target.dataset.id}`);
      qtyID.innerHTML = product.QTY;
      subTotalID.innerHTML = getTotal().toFixed(2);
      totalPriceID.innerHTML = (getTotal() * 1.4).toFixed(2);
    });
  });

  removeProductID.forEach((removeProductIDBTN) => {
    // **************** remove from cart BTN ************************
    removeProductIDBTN.addEventListener("click", (e) => {
      localStorage.removeItem(e.target.dataset.id);
      const removed =
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement;
      removed.remove();
      subTotalID.innerHTML = getTotal().toFixed(2);
      totalPriceID.innerHTML = (getTotal() * 1.4).toFixed(2);
    });
  });
});

userCartHTML.render(products);

function getProductsInLocalstorage() {
  let productsInStorage = { ...localStorage };
  let arrayOfProducts = [];

  for (let key in productsInStorage) {
    if (!isNaN(key)) {
      arrayOfProducts.push(JSON.parse(productsInStorage[key]));
    }
  }
  return arrayOfProducts;
}

// //////////////////////////////////////

const checkOutID = document.getElementById("checkOut");
const displayBlockID = document.getElementById("displayBlock");
const dateID = document.getElementById("date");
const subTotalID = document.getElementById("subTotal");

const d = new Date();

dateID.innerHTML = `${d.getDay()} - ${d.getMonth()} - ${d.getFullYear()}`;

function getTotal() {
  let totalPrice = 0;
  for (let product of getProductsInLocalstorage()) {
    totalPrice += product.totalPrice;
  }
  return totalPrice;
}

checkOutID.addEventListener("click", () => {
  subTotalID.innerHTML = getTotal().toFixed(2);
  totalPriceID.innerHTML = (getTotal() * 1.4).toFixed(2);
  displayBlockID.classList.replace("d-none", "d-block");
});
