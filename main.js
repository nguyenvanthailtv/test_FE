document.addEventListener("DOMContentLoaded", () => {
  let timeOut = 100;
  let isScrolling;
  let isTouch;
  let cardWidth = 0; // chiều rộng của card

  let slideActive = 0; // vị trí của slide đầu tiên trên màn hình
  const productList = document.querySelector(".product-list");

  const cards = Array.from({ length: 40 }, (_, i) => `product-item ${i + 1}`);

  // Thêm card vào DOM
  cards.forEach((cardText, cardIndex) => {
    const card = document.createElement("div");
    if (cardIndex == 0) {
      card.className = "product-item active";
    } else {
      card.className = "product-item";
    }

    const cardContent = document.createElement("div");
    cardContent.textContent = cardText;
    card.appendChild(cardContent);
    productList.appendChild(card);
  });
  const productItems = document.querySelectorAll(".product-item");
  const productLeft = productList.getBoundingClientRect().left ?? 0
  productItems.forEach((el, index) => {
    console.log(el.getBoundingClientRect().left - productLeft, 'e')
  })
  console.log(productList.getBoundingClientRect().left, 'aaaaaa')
  productList.addEventListener("scroll", () => {
    document.querySelectorAll(".active").forEach((el) => el.classList.remove("active"));
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      slideActive = 0;
      productItems.forEach((element) => {
        const item = element.getBoundingClientRect();
        const itemLeft = element.getBoundingClientRect().left - productLeft
        // console.log(item.left, item.left - productLeft ,' item')
        cardWidth = item.width;
        if (itemLeft <= 0 && itemLeft + item.width < item.width / 2) {
            // console.log(item.left, 'aa')
          slideActive = slideActive + 1;
        }
      });
      productList.scrollTo({
        left: slideActive * cardWidth,
        behavior: "smooth",
      });

      document.querySelectorAll(".active").forEach((el) => el.classList.remove("active"));
      productItems[slideActive].classList.add("active");
    }, timeOut);
  });

  productList.addEventListener("touchstart", () => {
    isTouch = false;
  });

  productList.addEventListener("touchend", () => {
    isTouch = true;
  });
});
