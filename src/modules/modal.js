
import { animate } from "../utils/animate";
export function modal(){
    const modalWindow = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const openBtn = document.querySelector('.button');

    function closeModal() {
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction; 
            },
            draw(progress) {
                modalWindow.style.opacity = 1 - progress;
                if (progress === 1) {
                    modalWindow.style.display = 'none'; 
                    overlay.style.display = 'none';
                }
            }
        });
    }
    openBtn.addEventListener('click', () => {
        modalWindow.style.display = 'block';
        overlay.style.display = 'block'
        
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modalWindow.style.opacity = progress;
            }
        });
    });
    document.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.classList.contains('header-modal__close')) {
            closeModal()
        }  
    });

}