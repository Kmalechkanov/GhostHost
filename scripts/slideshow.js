window.onload = () => {
    let slideshow = document.getElementById('slideshow')
    let slideIndex = 0
    const slideTimer = 5 * 1000 + 2
    let interval = setInterval(slideSlide, slideTimer)


    slideshow.addEventListener('click', (event) => {
        let current = event.target
        if (current.tagName === 'I') {
            clearInterval(interval)
            interval = setInterval(slideSlide, slideTimer)

            let slide = current.parentElement.parentElement.parentElement

            // TODO Use something better 
            if (current.parentElement.children[1] == current) {
                slideIndex = 0
            }
            else if (current.parentElement.children[2] == current) {
                slideIndex = 1
            }
            else if (current.parentElement.children[3] == current) {
                slideIndex = 2
            }

            let newSlide = slide.parentElement.children[slideIndex]

            switchVisible(slide, newSlide)
            setImage(newSlide.children[0].src)
        }
    })

    function slideSlide() {
        let lastSlide = slideIndex
        slideIndex++
        slideIndex = slideIndex == 3 ? 0 : slideIndex

        changeSlide(lastSlide, slideIndex)
    }

    function changeSlide(oldIndex, newIndex) {
        let newSlide = slideshow.children[newIndex]
        let oldSlide = slideshow.children[oldIndex]

        switchVisible(oldSlide, newSlide)
        setImage(newSlide.children[0].src)
    }

    function setImage(image) {
        slideshow.style.backgroundImage =
            `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${image}")`
    }

    function switchVisible(first, second) {
        first.classList = 'hideAnimation'
        first.children[0].classList = 'hideAnimation'
        let timer = setTimeout(() => {
            first.classList = "hidden"
        }, 1900)
        second.classList = 'visible'
    }
}