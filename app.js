// Sélecteurs principaux
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Base de données des produits
const products = [
  {
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "./img/air.png" },
      { code: "darkblue", img: "./img/air2.png" },
    ],
  },
  {
    title: "Air Jordan",
    price: 149,
    colors: [
      { code: "lightgray", img: "./img/jordan.png" },
      { code: "green", img: "./img/jordan2.png" },
    ],
  },
  {
    title: "Blazer",
    price: 109,
    colors: [
      { code: "lightgray", img: "./img/blazer.png" },
      { code: "green", img: "./img/blazer2.png" },
    ],
  },
  {
    title: "Crater",
    price: 129,
    colors: [
      { code: "black", img: "./img/crater.png" },
      { code: "lightgray", img: "./img/crater2.png" },
    ],
  },
  {
    title: "Hippie",
    price: 99,
    colors: [
      { code: "gray", img: "./img/hippie.png" },
      { code: "black", img: "./img/hippie2.png" },
    ],
  },
];

let selectedProduct = products[0];

/**
 * Met à jour l'affichage du produit sélectionné
 */
function updateProductView() {
  if (!currentProductTitle || !currentProductPrice || !currentProductImg) return;

  currentProductTitle.textContent = selectedProduct.title;
  currentProductPrice.textContent = `$${selectedProduct.price}`;
  currentProductImg.src = selectedProduct.colors[0].img;

  currentProductColors.forEach((colorElement, i) => {
    if (selectedProduct.colors[i]) {
      colorElement.style.backgroundColor = selectedProduct.colors[i].code;
    }
  });
}

// Initialisation de l'affichage
updateProductView();

// Changement de produit au clic sur un menuItem
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (wrapper) wrapper.style.transform = `translateX(${-100 * index}vw)`;
    selectedProduct = products[index];
    updateProductView();
  });
});

// Changement d'image selon la couleur
currentProductColors.forEach((colorElement, index) => {
  colorElement.addEventListener("click", () => {
    if (selectedProduct.colors[index]) {
      currentProductImg.src = selectedProduct.colors[index].img;
    }
  });
});

// Sélection de taille
currentProductSizes.forEach((sizeElement) => {
  sizeElement.addEventListener("click", () => {
    currentProductSizes.forEach((el) => {
      el.style.backgroundColor = "white";
      el.style.color = "black";
    });
    sizeElement.style.backgroundColor = "black";
    sizeElement.style.color = "white";
  });
});

// Ouverture du paiement
productButton?.addEventListener("click", () => {
  if (payment) payment.style.display = "flex";
});

// Fermeture du paiement
close?.addEventListener("click", () => {
  if (payment) payment.style.display = "none";
});
