window.onload = () => {
    let slideshow = document.getElementById('slideshow')
    const timer = 5 * 1000
    let slideIndex = 0
    let interval = setInterval(slideSlide, timer)


    slideshow.addEventListener('click', (event) => {
        let current = event.target
        if (current.tagName === 'I') {
            clearInterval(interval)
            interval = setInterval(slideSlide, timer)

            let slide = current.parentElement.parentElement.parentElement
            slide.classList.add('hidden')

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
            newSlide.classList.remove('hidden')
            
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

        oldSlide.classList.add('hidden')
        newSlide.classList.remove('hidden')

        setImage(newSlide.children[0].src)
    }
    
    function setImage(image) {
        slideshow.style.backgroundImage =
            `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${image}")`
    }
}