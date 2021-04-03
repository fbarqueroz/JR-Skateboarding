/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable radix */
/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */
// variables and constants
const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-list');
const cartTotalValue = document.getElementById('cart-total-value');
const cartCountInfo = document.getElementById('cart-count-info');
let cartItemID = 1;

eventListeners();

// all event listeners
function eventListeners() {
  window.addEventListener('DOMContentLoaded', () => {
    loadJSON();
    loadCart();
  });

  // show/hide cart container
  document.getElementById('cart-btn').addEventListener('click', () => {
    cartContainer.classList.toggle('show-cart-container');
  });

  // add to cart
  productList.addEventListener('click', purchaseProduct);

  // delete from cart
  cartList.addEventListener('click', deleteProduct);
}

// update cart info
function updateCartInfo() {
  const cartInfo = findCartInfo();
  cartCountInfo.textContent = cartInfo.productCount;
  cartTotalValue.textContent = cartInfo.total;
}

// load product items content form JSON file
function loadJSON() {
  fetch('https://604ab2419251e100177cf001.mockapi.io/Decks')
    .then(response => response.json())
    .then(data => {
      const myForm = document.getElementById('myForm');
      myForm.addEventListener('keyup', (e) => {
        if (e.target.matches) {
          document.querySelectorAll('.product-item').forEach(product => ((product.textContent.toLowerCase().includes(e.target.value))
            ? product.classList.remove('filter')
            : product.classList.add('filter')));
        }
      });
      let html = '';
      data.forEach(product => {
        html += `
            <div class = "product-item">
              <div class = "product-img">
                  <img src = "${product.img}" alt = "product image">
                  <button type = "button" class = "add-to-cart-btn">
                      <b class = "fas fa-shopping-cart"></b>Add To Cart
                  </button>
              </div>
              <div class = "product-content">
                  <h3 id = " " class = "product-name">${product.name}</h3>
                  <span class = "product-category">${product.description}</span>
                  <p class = "product-price">$${product.price}</p>
              </div>
              <div class= "product__details--btn">
                <button>Details</button>
              </div>
            </div>
          `;
      });
      productList.innerHTML = html;
    });
}
// purchase product
function purchaseProduct(e) {
  if (e.target.classList.contains('add-to-cart-btn')) {
    const product = e.target.parentElement.parentElement;
    getProductInfo(product);
  }
}
// get product info after add to cart button click
function getProductInfo(product) {
  const productInfo = {
    id: cartItemID,
    imgSrc: product.querySelector('.product-img img').src,
    name: product.querySelector('.product-name').textContent,
    category: product.querySelector('.product-category').textContent,
    price: product.querySelector('.product-price').textContent,
  };
  cartItemID++;
  addToCartList(productInfo);
  saveProductInStorage(productInfo);
}
// add the selected product to the cart list
function addToCartList(product) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.setAttribute('data-id', `${product.id}`);
  cartItem.innerHTML = `
      <img src = "${product.imgSrc}" alt = "product image">
      <div class = "cart-item-info">
          <h3 class = "cart-item-name">${product.name}</h3>
          <span class = "cart-item-category">${product.category}</span>
          <span class = "cart-item-price">${product.price}</span>
      </div>

      <button type = "button" class = "cart-item-del-btn">
          <i class = "fas fa-times">&#xD7;</i>
      </button>
  `;
  cartList.appendChild(cartItem);
}
// save the product in the local storage
function saveProductInStorage(item) {
  const products = getProductFromStorage();
  products.push(item);
  localStorage.setItem('products', JSON.stringify(products));
  updateCartInfo();
}

// get all the products info if there is any in the local storage
function getProductFromStorage() {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

// load carts product
function loadCart() {
  const products = getProductFromStorage();
  if (products.length < 1) {
    cartItemID = 1;
  } else {
    cartItemID = products[products.length - 1].id;
    cartItemID++;
  }
  products.forEach(product => addToCartList(product));

  // calculate and update UI of cart info
  updateCartInfo();
}

// calculate total price of the cart and other info
function findCartInfo() {
  const products = getProductFromStorage();
  const total = products.reduce((acc, product) => {
    const price = parseFloat(product.price.substr(1)); // removing dollar sign
    return acc += price;
  }, 0); // adding all the prices

  return {
    total: total.toFixed(2),
    productCount: products.length,
  };
}

// delete product from cart list and local storage
function deleteProduct(e) {
  let cartItem;
  if (e.target.tagName === 'BUTTON') {
    cartItem = e.target.parentElement;
    cartItem.remove(); // this removes from the DOM only
  } else if (e.target.tagName === 'I') {
    cartItem = e.target.parentElement.parentElement;
    cartItem.remove(); // this removes from the DOM only
  }

  const products = getProductFromStorage();
  const updatedProducts = products.filter(product => {
    return product.id !== parseInt(cartItem.dataset.id);
  });
  localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion
  updateCartInfo();
}
