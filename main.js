
document.addEventListener('DOMContentLoaded', () => {
    let timeOut = 100
    let isScrolling 
    const productList = document.querySelector('.product-list')
    let slide = 0
    let width = 0

    const cards = Array.from({ length: 40 }, (_, i) => `product-item ${i + 1}`);

    // Thêm card vào DOM
    cards.forEach(cardText => {
      const card = document.createElement("div");
      card.className = "product-item";
    //   card.textContent = cardText;

      const cardContent = document.createElement('div')
      cardContent.textContent = cardText
      card.appendChild(cardContent)
      productList.appendChild(card);
    });
    const productItems = document.querySelectorAll('.product-item')

    productList.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        slide = 0
        productItems.forEach(element => {
            const item = element.getBoundingClientRect();

            width = item.width
            if(item.left < 0 && item.left + item.width < item.width / 2){
                slide = slide + 1
            }
            
        });
        productList.scrollTo({
            left: slide * width ,
            behavior: "smooth",
        })

        productItems.forEach(element => {
            const item = element.getBoundingClientRect();
            if(item.left > 0 && item.left < item.width) {
                element.classList.add('active')
            }
            
        });
    }, timeOut);
        

    })
})