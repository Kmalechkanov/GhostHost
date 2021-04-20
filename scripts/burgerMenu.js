
window.addEventListener("load", () => {
    let burger = document.getElementById('burger')
    let navUl = document.querySelector('#main-nav > ul')

    burger.addEventListener('click', (event) => {
        console.log(navUl.classList)
        if (navUl.classList == 'visible') {
            console.log('1')
            navUl.classList = 'hideAnimation'
            let timer = setTimeout(() => {
                navUl.style.display = "none"
            }, 1900)
        }
        else {
            console.log('0')
            navUl.style.display = "block"
            navUl.classList = 'visible'
        }
    })
})