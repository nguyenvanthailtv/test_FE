
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list')
    let slide = 0

    const productItems = document.querySelectorAll('.product-item')
    // productList.addEventListener('scroll', (event) => {
    //     console.log(productList.scrollLeft,'event')
    // })

    productList.addEventListener('scrollend', () => {
        // slide = 0
        // productItems.forEach(element => {
        //     const item = element.getBoundingClientRect();
        //     if(item.left < 0 && item.left + item.width < item.width / 2){
        //         slide = slide + 1
        //     }
            
        // });
        // productList.scrollTo({
        //     // left: slide - 1 > 0 ? slide * 200 + 8 * (slide - 1) : slide * 200,
        //     left: slide * 200 + 8 * slide,
        //     behavior: "smooth",
        // })
    })

    productList.addEventListener('touchstart', () => {
        console.log('touchstart')
    })

    productList.addEventListener('touchend', () => {
        slide = 0
        productItems.forEach(element => {
            const item = element.getBoundingClientRect();
            if(item.left < 0 && item.left + item.width < item.width / 2){
                slide = slide + 1
            }
            
        });
        productList.scrollTo({
            // left: slide - 1 > 0 ? slide * 200 + 8 * (slide - 1) : slide * 200,
            left: slide * 200 + 8 * slide,
            behavior: "smooth",
        })
    })
})