window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}


let page = document.title

let lang = navigator.language || navigator.userLanguage;

//Cлайдер с мальчиком

const images = document.querySelectorAll('.slider .slider-line .slider__item');
const sliderLine = document.querySelector('.slider-line');
let countOfSlides = 0;
let widthOfLine;

function mainSwipe() {
    widthOfLine = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = widthOfLine * images.length + 'px';
    images.forEach(item => {
        item.style.width = widthOfLine + 'px';
        item.style.height = 'auto';
    });
    rollSlider()
}

mainSwipe()
window.addEventListener('resize', mainSwipe)


function rollSlider() {
    sliderLine.style.transform = "translate(-" + countOfSlides * widthOfLine + "px)";
}

document.querySelector('.slider-prev').addEventListener('click', () => {
    countOfSlides--
    if (countOfSlides < 0) {
        countOfSlides = images.length - 1
    }
    rollSlider()
})

document.querySelector('.slider-next').addEventListener('click', () => {
    countOfSlides++
    if (countOfSlides >= images.length) {
        countOfSlides = 0
    }
    rollSlider()
})


//Слайдер с ценами

const priceImages = document.querySelectorAll('.price .price-line .price__item');
const priceImagesArr = [...priceImages]
const priceSliderLine = document.querySelector('.price-line');
let priceCountOfSlides = 0;
let priceWidthOfLine;
let sliderScale


function priceMainSwipe() {
    if (document.body.clientWidth >= 620) {
        sliderScale = 3.2
    } else if (document.body.clientWidth >= 420) {
        sliderScale = 2.2
    } else sliderScale = 1.1

    priceWidthOfLine = document.querySelector('.price').offsetWidth;
    priceSliderLine.style.width = (priceWidthOfLine * priceImages.length) / sliderScale + 'px';
    priceImages.forEach(item => {
        item.style.width = priceWidthOfLine / sliderScale + 'px';
        item.style.marginRight = '30px'
        item.style.height = 'auto';
    });
    priceRollSlider()
}
priceMainSwipe()
window.addEventListener('resize', priceMainSwipe)

function priceRollSlider() {
    priceSliderLine.style.transform = "translate(-" + (priceCountOfSlides * (priceWidthOfLine / sliderScale)) + "px)";
}


document.querySelector('.price-prev').addEventListener('click', () => {
    priceCountOfSlides--
    if (priceCountOfSlides < 0) {
        priceCountOfSlides = priceImages.length - 1
    }
    priceRollSlider()
})

document.querySelector('.price-next').addEventListener('click', () => {
    priceCountOfSlides++
    if (priceCountOfSlides >= priceImages.length - 2) {
        priceCountOfSlides = 0
    }
    priceRollSlider()
})

// document.querySelector('.price').addEventListener('touchstart', handleTouchStart, false)
// document.querySelector('.price').addEventListener('touchmove', handleTouchMove, false)
document.querySelector('.slider').addEventListener('touchstart', handleTouchStart, false)
document.querySelector('.slider').addEventListener('touchmove', handleTouchMove, false)

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return false;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // r - l
        if (xDiff > 0) {
            countOfSlides--;
            if (countOfSlides < 0) {
                countOfSlides = images.length - 1;
            }
            rollSlider();
        } else {
            countOfSlides++;
            if (countOfSlides >= images.length) {
                countOfSlides = 0;
            }
            rollSlider();
        }
    }

    x1 = null
    y1 = null
}


//как работает каракули в навигации
const karakul1Block = document.querySelector('.nav__items-underline')
const navSvg = document.getElementById('navSvg')
const karakul1 = document.getElementById('karakul1')
const navItems = document.querySelectorAll('.nav__items a')

for (const navItem of navItems) {
    navItem.addEventListener('mouseover', () => {

        if (lang === 'rus') {
            switch (navItem.innerHTML) {
                case 'Портфолио':
                    navSvg.style.width = "106px"
                    karakul1Block.style.left = "-10px"
                    karakul1.classList.add('tpFKIcRS_0')
                    break
    
                case 'Магазин':
                    navSvg.style.width = "106px"
                    karakul1Block.style.left = "100px"
                    karakul1.classList.add('tpFKIcRS_0')
                    break
    
                case 'NFT':
                    navSvg.style.width = "85px"
                    karakul1Block.style.left = "192px"
                    karakul1.classList.add('tpFKIcRS_0')
                    break
    
                case 'Курс':
                    navSvg.style.width = "85px"
                    karakul1Block.style.left = "260px"
                    karakul1.classList.add('tpFKIcRS_0')
                    break
            }
        } else {
            switch (navItem.innerHTML) {
                case 'Portfolio':
                    navSvg.style.width = "85px"
                    karakul1Block.style.left = "-10px"
                    karakul1.classList.add('tpFKIcRS_0')
                    break
    
                case 'Shop':
                    navSvg.style.width = "80px"
                    karakul1Block.style.left = "80px"
                    karakul1.classList.add('tpFKIcRS_0')
                    break
    
                case 'NFT':
                    navSvg.style.width = "85px"
                    karakul1Block.style.left = "140px"
                    karakul1.classList.add('tpFKIcRS_0')
                    break
    
                case 'Course':
                    navSvg.style.width = "85px"
                    karakul1Block.style.left = "215px"
                    karakul1.classList.add('tpFKIcRS_0')
                    break
            }
        }
    })

    navItem.addEventListener('mouseout', () => {
        if (lang === 'rus') {
            switch (navItem.innerHTML) {
                case 'Портфолио':
                    karakul1.classList.remove('tpFKIcRS_0')
                    break

                case 'Магазин':
                    karakul1.classList.remove('tpFKIcRS_0')
                    break

                case 'NFT':
                    karakul1.classList.remove('tpFKIcRS_0')
                    break

                case 'Курс':
                    karakul1.classList.remove('tpFKIcRS_0')
                    break
            }

            switch(document.title) {
                case 'Portfolio':
                    navSvg.style.width = "106px"
                    karakul1Block.style.left = "-10px"
                    break
            }
        } else {
            switch (navItem.innerHTML) {
                case 'Portfolio':
                    karakul1.classList.remove('tpFKIcRS_0')
                    break

                case 'Shop':
                    karakul1.classList.remove('tpFKIcRS_0')
                    break

                case 'NFT':
                    karakul1.classList.remove('tpFKIcRS_0')
                    break

                case 'Course':
                    karakul1.classList.remove('tpFKIcRS_0')
                    break
            }

            switch(document.title) {
                case 'Portfolio': 
                    navSvg.style.width = "85px"
                    karakul1Block.style.left = "-10px"
                    break
            }
        }
    })
}

const karakul2 = document.getElementById('karakul2') //тут объявляете каракули
const karakul3 = document.getElementById('karakul3')
const karakul6 = document.getElementById('karakul6')

//каракуля у дизайн под ключ
let observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        entry.isIntersecting ? karakul2.classList.add('PXyQjkTS_0') : console.log('not Intersect')
    })
}, {
    threshold: .5 //задержка перед началом анимации
})

observer1.observe(document.querySelector('.directions__underline'))

//каракуля у скидок
let observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        entry.isIntersecting ? karakul3.classList.add('oqMKZScV_0') : console.log('not Intersect') //добавить класс с анимацией каракули
    })
}, {
    threshold: .5 //задержка перед началом анимации
})

observer2.observe(document.querySelector('.sales__underline')) //класс за которым надо следить

//каракуля у контактов
let observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        entry.isIntersecting ? karakul6.classList.add('oqMKZSc_0') : console.log('not Intersect') //добавить класс с анимацией каракули
    })
}, {
    threshold: .5 //задержка перед началом анимации
})

observer3.observe(document.querySelector('.contacts__underline')) //класс за которым надо следить


//попап
const makeModal = modalSel => {
    const modalEl = document.querySelector(modalSel + 'Popup');
    btnEl = document.querySelector(modalSel + '__preview'),
    closeEl = document.querySelector(modalSel + 'Cross')
    closeBody = document.querySelector('.popup')
    bg = document.querySelector(modalSel + 'Bg')


    btnEl.addEventListener('click', () => modalEl.classList.add('open'));
    closeEl.addEventListener('click', () => modalEl.classList.remove('open'));
    bg.addEventListener('click', () => modalEl.classList.remove('open'));
}

makeModal('#brand')
makeModal('#test')

makeModal('#brandbook')
makeModal('#web')
makeModal('#branding')
makeModal('#logodesign')
makeModal('#presentation')
makeModal('#polygraphy')
makeModal('#signboards')
makeModal('#social')
makeModal('#illustrations')
makeModal('#allowance')
makeModal('#packaging')
makeModal('#catalog')
makeModal('#ad')
makeModal('#merch')
makeModal('#cosmetics')
makeModal('#ceramics')
makeModal('#realty')
makeModal('#repair')
makeModal('#beauty')
makeModal('#education')
makeModal('#food')
makeModal('#clothes')
makeModal('#tarot')
makeModal('#experts')
makeModal('#tobacco')

//появление блоков
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
}

let options = { threshold: [0.5] };
let observer4 = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer4.observe(elm);
}

//бургер
const burger = document.querySelector("#burger")
const sidebar = document.querySelector("#sidebar")


burger.addEventListener('click', () => burger.classList.toggle('nav__burger-active'))
burger.addEventListener('click', () => sidebar.classList.toggle('nav__sidebar-active'))