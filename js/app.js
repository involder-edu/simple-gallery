const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clrActiveClasses()
        slide.classList.add('_active')
    })
}

function clrActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('_active')
    })
}