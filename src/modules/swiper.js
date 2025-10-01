export function swiperBenefits() {
  class Slider {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.slider-track');
        this.slides = Array.from(container.querySelectorAll('.slider-slide'));
        this.prevBtn = container.querySelector('#slider-prev');
        this.nextBtn = container.querySelector('#slider-next');
        
        this.currentSlide = 0;
        this.slidesToShow = this.getSlidesToShow();
        this.totalSlides = this.slides.length;
        
        this.init();
    }

    getSlidesToShow() {
        const width = window.innerWidth;

        if (width >= 576) return 3;
        return 1; 
    }

    init() {
        this.updateSlider();
        this.addEventListeners();
        this.setupResponsive();
    }

    updateSlider() {
        const slideWidth = 100 / this.slidesToShow;
        const translateX = -this.currentSlide * slideWidth;
        this.track.style.transform = `translateX(${translateX}%)`;
      
        this.updateButtons();
    }

    updateButtons() {
       
        this.prevBtn.disabled = this.currentSlide === 0;
        
       
        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);
        this.nextBtn.disabled = this.currentSlide >= maxSlide;
        

        if (this.currentSlide > maxSlide) {
            this.currentSlide = maxSlide;
            this.updateSlider();
        }
    }

    next() {
        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);
        if (this.currentSlide < maxSlide) {
            this.currentSlide++;
            this.updateSlider();
        }
    }

    prev() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlider();
        }
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
      
        this.setupSwipe();
    }

    setupSwipe() {
        let startX = 0;
        let endX = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });

        this.track.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            const handleMouseUp = (e) => {
                endX = e.clientX;
                this.handleSwipe(startX, endX);
                document.removeEventListener('mouseup', handleMouseUp);
            };
            document.addEventListener('mouseup', handleMouseUp);
        });
    }

    handleSwipe(startX, endX) {
        const diff = startX - endX;
        const swipeThreshold = 50;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    setupResponsive() {
        window.addEventListener('resize', () => {
            const newSlidesToShow = this.getSlidesToShow();
            if (newSlidesToShow !== this.slidesToShow) {
                this.slidesToShow = newSlidesToShow;
                
                const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);
                if (this.currentSlide > maxSlide) {
                    this.currentSlide = maxSlide;
                }
                
                this.updateSlider();
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-benefits');
    new Slider(sliderContainer);
});
}

export function swiperServices() {
  class Slider {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.slider-track');
        this.slides = Array.from(container.querySelectorAll('.slider-slideService'));
        this.prevBtn = container.querySelector('#slider-prev');
        this.nextBtn = container.querySelector('#slider-next');
        
        this.currentSlide = 0;
        this.slidesToShow = this.getSlidesToShow();
        this.totalSlides = this.slides.length;
        
        this.init();
    }

    getSlidesToShow() {
        const width = window.innerWidth;
        if (width >= 1200) return 2;  
        return 1;                    
    }

    init() {
        this.updateSlider();
        this.addEventListeners();
        this.setupResponsive();
    }

    updateSlider() {
        const slideWidth = 100 / this.slidesToShow;
        const translateX = -this.currentSlide * slideWidth;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        this.updateButtons();
    }

    updateButtons() {
        // Кнопка "назад"
        this.prevBtn.disabled = this.currentSlide === 0;
        
        // Кнопка "вперед" - правильный расчет максимального слайда
        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);
        this.nextBtn.disabled = this.currentSlide >= maxSlide;
        
        // Защита от выхода за границы
        if (this.currentSlide > maxSlide) {
            this.currentSlide = maxSlide;
            this.updateSlider();
        }
    }

    next() {
        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);
        if (this.currentSlide < maxSlide) {
            this.currentSlide++;
            this.updateSlider();
        }
    }

    prev() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlider();
        }
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
      
        this.setupSwipe();
    }

    setupSwipe() {
        let startX = 0;
        let endX = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });

        this.track.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            const handleMouseUp = (e) => {
                endX = e.clientX;
                this.handleSwipe(startX, endX);
                document.removeEventListener('mouseup', handleMouseUp);
            };
            document.addEventListener('mouseup', handleMouseUp);
        });
    }

    handleSwipe(startX, endX) {
        const diff = startX - endX;
        const swipeThreshold = 50;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    setupResponsive() {
        window.addEventListener('resize', () => {
            const newSlidesToShow = this.getSlidesToShow();
            if (newSlidesToShow !== this.slidesToShow) {
                this.slidesToShow = newSlidesToShow;
                
                // Корректируем позицию при изменении размера
                const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);
                if (this.currentSlide > maxSlide) {
                    this.currentSlide = maxSlide;
                }
                
                this.updateSlider();
            }
        });
    }
}
    document.addEventListener('DOMContentLoaded', () => {
        const sliderContainer = document.querySelector('.slider-services');
        if (sliderContainer) {
            new Slider(sliderContainer);
        }
    });
}