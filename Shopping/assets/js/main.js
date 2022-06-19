const wrapper = document.querySelector(".slideWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// product section
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "/assets/img/air.png",
      },
      {
        code: "darkblue",
        img: "/assets/img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "/assets/img/jordan.png",
      },
      {
        code: "green",
        img: "/assets/img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/assets/img/blazer.png",
      },
      {
        code: "green",
        img: "/assets/img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/assets/img/crater.png",
      },
      {
        code: "lightgray",
        img: "/assets/img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "/assets/img/hippie.png",
      },
      {
        code: "black",
        img: "/assets/img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the hero slide
    wrapper.style.transform = `translateX(${index * -100}vw)`;
    wrapper.style.transition = `all 0.8s ease`;

    // change the product img
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // assign the current color for buttons
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      (size.style.backgroundColor = "white"), (size.style.color = "black");
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//show the payment modal
const prodcutButton = document.querySelector(".productButton");
const paymentModal = document.querySelector(".payment");
const close = document.querySelector(".close");

prodcutButton.addEventListener("click", () => {
  paymentModal.style.display = "flex";
});

close.addEventListener("click", () => {
  paymentModal.style.display = "none";
});
