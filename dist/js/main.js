/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calcCost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calcCost */ \"./modules/calcCost.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_regularForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/regularForm */ \"./modules/regularForm.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/swiper */ \"./modules/swiper.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modal)()\r\n;(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_4__.swiperBenefits)()\r\n;(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_4__.swiperServices)()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__.timer)('3 october 2025')\r\n;(0,_modules_regularForm__WEBPACK_IMPORTED_MODULE_2__.regularForm)()\r\n;(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__.scroll)()\r\n;(0,_modules_calcCost__WEBPACK_IMPORTED_MODULE_0__.calcConst)()\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ }),

/***/ "./modules/calcCost.js":
/*!*****************************!*\
  !*** ./modules/calcCost.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcConst: () => (/* binding */ calcConst)\n/* harmony export */ });\n/* harmony import */ var _utils_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/animate */ \"./utils/animate.js\");\n\r\n\r\nfunction calcConst() {\r\n  const type = document.getElementById(\"calc-type\");\r\n  const typeGlazing = document.getElementById(\"calc-type-material\");\r\n  const square = document.getElementById(\"calc-input\");\r\n  const total = document.getElementById(\"calc-total\");\r\n\r\n  square.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^0-9.]/g, \"\");\r\n    countCalc();\r\n  });\r\n  type.addEventListener(\"change\", countCalc);\r\n  typeGlazing.addEventListener(\"change\", countCalc);\r\n\r\n  function countCalc() {\r\n    const calcTypeValue = parseFloat(type.options[type.selectedIndex].value);\r\n    const calcGlazingValue = parseFloat(\r\n      typeGlazing.options[typeGlazing.selectedIndex].value\r\n    );\r\n    const calcSquareValue = parseFloat(square.value);\r\n\r\n    if (\r\n      !isNaN(calcTypeValue) &&\r\n      !isNaN(calcGlazingValue) &&\r\n      !isNaN(calcSquareValue) &&\r\n      square.value.trim() !== \"\"\r\n    ) {\r\n      const totalValue = calcSquareValue * calcGlazingValue * calcTypeValue;\r\n      total.value = totalValue.toFixed(3);\r\n    } else {\r\n      total.value = 0;\r\n    }\r\n  }\r\n\r\n  countCalc();\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/calcCost.js?\n}");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _utils_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/animate */ \"./utils/animate.js\");\n\r\n\r\nfunction modal() {\r\n    const headerModal = document.querySelector('.header-modal');\r\n    const headerOpenButton = document.querySelector('.button');\r\n    const serviceOpenButtons = document.querySelectorAll('.service-button');\r\n    const serviceModal = document.querySelector('.services-modal');\r\n    const overlay = document.querySelector('.overlay');\r\n    const modal = document.getElementById('modal');\r\n    const modalImg = document.getElementById('modal-img');\r\n    const modalClose = document.getElementById('modal-close');\r\n    const sertificates = document.querySelectorAll('.sertificate-document')\r\n\r\n    sertificates.forEach(link => {\r\n        link.addEventListener('click', function(event) {\r\n            event.preventDefault();\r\n            modal.style.display = 'flex';\r\n            modalImg.src = this.href;\r\n        });\r\n    });\r\n\r\n    modalClose.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n        modalImg.src = ''; \r\n    });\r\n\r\n    modal.addEventListener('click', (event) => {\r\n        if (event.target === modal) {\r\n            modal.style.display = 'none';\r\n            modalImg.src = '';\r\n        }\r\n    });\r\n\r\n    function closeModal(modalBlock, background) {\r\n        (0,_utils_animate__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                modalBlock.style.opacity = 1 - progress;\r\n                if (progress === 1) {\r\n                    modalBlock.style.display = 'none';\r\n                    background.style.display = 'none';\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    function openModal(modalBlock, background) {\r\n        modalBlock.style.display = 'block';\r\n        background.style.display = 'block';\r\n        (0,_utils_animate__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                modalBlock.style.opacity = progress;\r\n            }\r\n        });\r\n    }\r\n\r\n    serviceOpenButtons.forEach((button) => {\r\n        button.addEventListener('click', () => openModal(serviceModal, overlay));\r\n    });\r\n\r\n    headerOpenButton.addEventListener('click', () => openModal(headerModal, overlay));\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target === overlay) {\r\n            if (headerModal.style.display === 'block') {\r\n                closeModal(headerModal, overlay);\r\n            } else if (serviceModal.style.display === 'block') {\r\n                closeModal(serviceModal, overlay);\r\n            }\r\n        } else if (e.target.classList.contains('header-modal__close')) {\r\n            closeModal(headerModal, overlay);\r\n        } else if (e.target.classList.contains('services-modal__close')) {\r\n            closeModal(serviceModal, overlay);\r\n        }\r\n        if(!e.target.closest('.sertificate-document')){\r\n            modal.style.display = 'none';\r\n            modalImg.src = '';\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ }),

/***/ "./modules/regularForm.js":
/*!********************************!*\
  !*** ./modules/regularForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   regularForm: () => (/* binding */ regularForm)\n/* harmony export */ });\nfunction regularForm() {\r\n  const forms = document.querySelectorAll('form');\r\n  const total = document.getElementById(\"calc-total\");\r\n\r\n  forms.forEach(form => {\r\n    const inputText = form.querySelector('input[name=\"fio\"]');\r\n    const inputTel = form.querySelector('input[name=\"phone\"]');\r\n\r\n    inputText.addEventListener('input', (event) => {\r\n      event.target.value = event.target.value.replace(/[^а-яёa-z\\s\\-]/gi, '');\r\n    });\r\n    inputTel.addEventListener('input', (event) => {\r\n      event.target.value = event.target.value.replace(/[^+\\d]/g, '');\r\n    });\r\n\r\n    form.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n\r\n      const valFio = inputText.value.trim();\r\n      const valTotal = total?.value ?? 0;\r\n      const valPhone = inputTel.value.trim();\r\n      const reFio = /^[а-яёa-z\\s\\-]+$/i;\r\n      const rePhone = /^\\+\\d{1,16}$/;\r\n      const data = {\r\n        fio: valFio,\r\n        phone: valPhone,\r\n        price: valTotal,\r\n      };\r\n      \r\n      if (!valFio && !valPhone) {\r\n        alert('Форма пустая. Пожалуйста, заполните все поля.');\r\n        return;\r\n      }\r\n\r\n      if (!reFio.test(valFio)) {\r\n        alert('Пожалуйста, введите корректное имя (русские или латинские буквы).');\r\n        return;\r\n      }\r\n\r\n      if (!rePhone.test(valPhone)) {\r\n        alert('Пожалуйста, введите корректный телефонный номер, начиная с + и максимум 16 цифр.');\r\n        return;\r\n      }\r\n\r\n      console.log('Отправка данных в JSON:', JSON.stringify(data));\r\n\r\n      form.reset();\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/regularForm.js?\n}");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scroll: () => (/* binding */ scroll)\n/* harmony export */ });\nfunction scroll(){\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n    const smoothScrollButton = document.querySelector('.smooth-scroll');\r\n    const firstSection = document.querySelector('#offer'); \r\n    window.addEventListener('scroll', () => {\r\n      if (!firstSection) return;\r\n\r\n      const sectionBottom = firstSection.getBoundingClientRect().bottom;\r\n      if (sectionBottom < 0) { \r\n        smoothScrollButton.style.display = 'block';\r\n      } else {\r\n        smoothScrollButton.style.display = 'none';\r\n      }\r\n    });\r\n\r\n    smoothScrollButton.addEventListener('click', () => {\r\n      window.scrollTo({\r\n        top: 0,\r\n        behavior: 'smooth'\r\n      });\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?\n}");

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   swiperBenefits: () => (/* binding */ swiperBenefits),\n/* harmony export */   swiperServices: () => (/* binding */ swiperServices)\n/* harmony export */ });\nfunction swiperBenefits() {\r\n  class Slider {\r\n    constructor(container) {\r\n        this.container = container;\r\n        this.track = container.querySelector('.slider-track');\r\n        this.slides = Array.from(container.querySelectorAll('.slider-slide'));\r\n        this.prevBtn = container.querySelector('#slider-prev');\r\n        this.nextBtn = container.querySelector('#slider-next');\r\n        \r\n        this.currentSlide = 0;\r\n        this.slidesToShow = this.getSlidesToShow();\r\n        this.totalSlides = this.slides.length;\r\n        \r\n        this.init();\r\n    }\r\n\r\n    getSlidesToShow() {\r\n        const width = window.innerWidth;\r\n\r\n        if (width >= 576) return 3;\r\n        return 1; \r\n    }\r\n\r\n    init() {\r\n        this.updateSlider();\r\n        this.addEventListeners();\r\n        this.setupResponsive();\r\n    }\r\n\r\n    updateSlider() {\r\n        const slideWidth = 100 / this.slidesToShow;\r\n        const translateX = -this.currentSlide * slideWidth;\r\n        this.track.style.transform = `translateX(${translateX}%)`;\r\n      \r\n        this.updateButtons();\r\n    }\r\n\r\n    updateButtons() {\r\n       \r\n        this.prevBtn.disabled = this.currentSlide === 0;\r\n        \r\n       \r\n        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);\r\n        this.nextBtn.disabled = this.currentSlide >= maxSlide;\r\n        \r\n\r\n        if (this.currentSlide > maxSlide) {\r\n            this.currentSlide = maxSlide;\r\n            this.updateSlider();\r\n        }\r\n    }\r\n\r\n    next() {\r\n        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);\r\n        if (this.currentSlide < maxSlide) {\r\n            this.currentSlide++;\r\n            this.updateSlider();\r\n        }\r\n    }\r\n\r\n    prev() {\r\n        if (this.currentSlide > 0) {\r\n            this.currentSlide--;\r\n            this.updateSlider();\r\n        }\r\n    }\r\n\r\n    addEventListeners() {\r\n        this.prevBtn.addEventListener('click', () => this.prev());\r\n        this.nextBtn.addEventListener('click', () => this.next());\r\n      \r\n        this.setupSwipe();\r\n    }\r\n\r\n    setupSwipe() {\r\n        let startX = 0;\r\n        let endX = 0;\r\n\r\n        this.track.addEventListener('touchstart', (e) => {\r\n            startX = e.touches[0].clientX;\r\n        });\r\n\r\n        this.track.addEventListener('touchend', (e) => {\r\n            endX = e.changedTouches[0].clientX;\r\n            this.handleSwipe(startX, endX);\r\n        });\r\n\r\n        this.track.addEventListener('mousedown', (e) => {\r\n            startX = e.clientX;\r\n            const handleMouseUp = (e) => {\r\n                endX = e.clientX;\r\n                this.handleSwipe(startX, endX);\r\n                document.removeEventListener('mouseup', handleMouseUp);\r\n            };\r\n            document.addEventListener('mouseup', handleMouseUp);\r\n        });\r\n    }\r\n\r\n    handleSwipe(startX, endX) {\r\n        const diff = startX - endX;\r\n        const swipeThreshold = 50;\r\n\r\n        if (Math.abs(diff) > swipeThreshold) {\r\n            if (diff > 0) {\r\n                this.next();\r\n            } else {\r\n                this.prev();\r\n            }\r\n        }\r\n    }\r\n\r\n    setupResponsive() {\r\n        window.addEventListener('resize', () => {\r\n            const newSlidesToShow = this.getSlidesToShow();\r\n            if (newSlidesToShow !== this.slidesToShow) {\r\n                this.slidesToShow = newSlidesToShow;\r\n                \r\n                const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);\r\n                if (this.currentSlide > maxSlide) {\r\n                    this.currentSlide = maxSlide;\r\n                }\r\n                \r\n                this.updateSlider();\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const sliderContainer = document.querySelector('.slider-benefits');\r\n    new Slider(sliderContainer);\r\n});\r\n}\r\n\r\nfunction swiperServices() {\r\n  class Slider {\r\n    constructor(container) {\r\n        this.container = container;\r\n        this.track = container.querySelector('.slider-track');\r\n        this.slides = Array.from(container.querySelectorAll('.slider-slideService'));\r\n        this.prevBtn = container.querySelector('#slider-prev');\r\n        this.nextBtn = container.querySelector('#slider-next');\r\n        \r\n        this.currentSlide = 0;\r\n        this.slidesToShow = this.getSlidesToShow();\r\n        this.totalSlides = this.slides.length;\r\n        \r\n        this.init();\r\n    }\r\n\r\n    getSlidesToShow() {\r\n        const width = window.innerWidth;\r\n        if (width >= 1200) return 2;  \r\n        return 1;                    \r\n    }\r\n\r\n    init() {\r\n        this.updateSlider();\r\n        this.addEventListeners();\r\n        this.setupResponsive();\r\n    }\r\n\r\n    updateSlider() {\r\n        const slideWidth = 100 / this.slidesToShow;\r\n        const translateX = -this.currentSlide * slideWidth;\r\n        this.track.style.transform = `translateX(${translateX}%)`;\r\n        \r\n        this.updateButtons();\r\n    }\r\n\r\n    updateButtons() {\r\n        // Кнопка \"назад\"\r\n        this.prevBtn.disabled = this.currentSlide === 0;\r\n        \r\n        // Кнопка \"вперед\" - правильный расчет максимального слайда\r\n        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);\r\n        this.nextBtn.disabled = this.currentSlide >= maxSlide;\r\n        \r\n        // Защита от выхода за границы\r\n        if (this.currentSlide > maxSlide) {\r\n            this.currentSlide = maxSlide;\r\n            this.updateSlider();\r\n        }\r\n    }\r\n\r\n    next() {\r\n        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);\r\n        if (this.currentSlide < maxSlide) {\r\n            this.currentSlide++;\r\n            this.updateSlider();\r\n        }\r\n    }\r\n\r\n    prev() {\r\n        if (this.currentSlide > 0) {\r\n            this.currentSlide--;\r\n            this.updateSlider();\r\n        }\r\n    }\r\n\r\n    addEventListeners() {\r\n        this.prevBtn.addEventListener('click', () => this.prev());\r\n        this.nextBtn.addEventListener('click', () => this.next());\r\n      \r\n        this.setupSwipe();\r\n    }\r\n\r\n    setupSwipe() {\r\n        let startX = 0;\r\n        let endX = 0;\r\n\r\n        this.track.addEventListener('touchstart', (e) => {\r\n            startX = e.touches[0].clientX;\r\n        });\r\n\r\n        this.track.addEventListener('touchend', (e) => {\r\n            endX = e.changedTouches[0].clientX;\r\n            this.handleSwipe(startX, endX);\r\n        });\r\n\r\n        this.track.addEventListener('mousedown', (e) => {\r\n            startX = e.clientX;\r\n            const handleMouseUp = (e) => {\r\n                endX = e.clientX;\r\n                this.handleSwipe(startX, endX);\r\n                document.removeEventListener('mouseup', handleMouseUp);\r\n            };\r\n            document.addEventListener('mouseup', handleMouseUp);\r\n        });\r\n    }\r\n\r\n    handleSwipe(startX, endX) {\r\n        const diff = startX - endX;\r\n        const swipeThreshold = 50;\r\n\r\n        if (Math.abs(diff) > swipeThreshold) {\r\n            if (diff > 0) {\r\n                this.next();\r\n            } else {\r\n                this.prev();\r\n            }\r\n        }\r\n    }\r\n\r\n    setupResponsive() {\r\n        window.addEventListener('resize', () => {\r\n            const newSlidesToShow = this.getSlidesToShow();\r\n            if (newSlidesToShow !== this.slidesToShow) {\r\n                this.slidesToShow = newSlidesToShow;\r\n                \r\n                // Корректируем позицию при изменении размера\r\n                const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);\r\n                if (this.currentSlide > maxSlide) {\r\n                    this.currentSlide = maxSlide;\r\n                }\r\n                \r\n                this.updateSlider();\r\n            }\r\n        });\r\n    }\r\n}\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        const sliderContainer = document.querySelector('.slider-services');\r\n        if (sliderContainer) {\r\n            new Slider(sliderContainer);\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./modules/swiper.js?\n}");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _utils_padZero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/padZero */ \"./utils/padZero.js\");\n\r\n\r\nfunction timer(deadline) {\r\n  const timerDays = document.querySelectorAll('.count.count_1 span');\r\n  const timerHours = document.querySelectorAll('.count.count_2 span');\r\n  const timerMinutes = document.querySelectorAll('.count.count_3 span');\r\n  const timerSeconds = document.querySelectorAll('.count.count_4 span');\r\n  let intervalTimerID = null;\r\n\r\n  const getTimeRemaining = () => {\r\n    const dateStop = new Date(deadline).getTime();\r\n    const dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    const days = (0,_utils_padZero__WEBPACK_IMPORTED_MODULE_0__.padZero)(Math.floor(timeRemaining / (3600 * 24)));\r\n    const hours = (0,_utils_padZero__WEBPACK_IMPORTED_MODULE_0__.padZero)(Math.floor((timeRemaining / 3600) % 24));\r\n    const minutes = (0,_utils_padZero__WEBPACK_IMPORTED_MODULE_0__.padZero)(Math.floor((timeRemaining / 60) % 60));\r\n    const seconds = (0,_utils_padZero__WEBPACK_IMPORTED_MODULE_0__.padZero)(Math.floor(timeRemaining % 60));\r\n\r\n    return { timeRemaining, days, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const { timeRemaining, days, hours, minutes, seconds } = getTimeRemaining();\r\n\r\n    if (timeRemaining <= 0) {\r\n      if (intervalTimerID !== null) {\r\n        clearInterval(intervalTimerID);\r\n      }\r\n      timerDays.forEach(el => el.textContent = '00');\r\n      timerHours.forEach(el => el.textContent = '00');\r\n      timerMinutes.forEach(el => el.textContent = '00');\r\n      timerSeconds.forEach(el => el.textContent = '00');\r\n      return;\r\n    }\r\n\r\n    timerDays.forEach(el => el.textContent = days);\r\n    timerHours.forEach(el => el.textContent = hours);\r\n    timerMinutes.forEach(el => el.textContent = minutes);\r\n    timerSeconds.forEach(el => el.textContent = seconds);\r\n  };\r\n\r\n  intervalTimerID = setInterval(updateClock, 1000);\r\n  updateClock();\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ }),

/***/ "./utils/animate.js":
/*!**************************!*\
  !*** ./utils/animate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nlet animationId = null;\r\n\r\nfunction animate({ duration, timing, draw }) {\r\n  // Отмена предыдущей запущенной анимации\r\n  if (animationId) {\r\n    cancelAnimationFrame(animationId);\r\n    animationId = null;\r\n  }\r\n\r\n  const start = performance.now();\r\n\r\n  function frame(time) {\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    const progress = timing(timeFraction);\r\n\r\n    draw(progress);\r\n\r\n    if (timeFraction < 1) {\r\n      animationId = requestAnimationFrame(frame);\r\n    } else {\r\n      animationId = null;\r\n    }\r\n  }\r\n\r\n  animationId = requestAnimationFrame(frame);\r\n}\r\n\n\n//# sourceURL=webpack:///./utils/animate.js?\n}");

/***/ }),

/***/ "./utils/padZero.js":
/*!**************************!*\
  !*** ./utils/padZero.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   padZero: () => (/* binding */ padZero)\n/* harmony export */ });\nconst padZero = (num) => {\r\n    return num < 10 ? '0' + num : num;\r\n}\n\n//# sourceURL=webpack:///./utils/padZero.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;