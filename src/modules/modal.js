import { animate } from "../utils/animate";

export function modal() {
    const headerModal = document.querySelector('.header-modal');
    const headerOpenButton = document.querySelector('.button');
    const serviceOpenButtons = document.querySelectorAll('.service-button');
    const serviceModal = document.querySelector('.services-modal');
    const overlay = document.querySelector('.overlay');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.getElementById('modal-close');
    const sertificates = document.querySelectorAll('.sertificate-document')

    sertificates.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.display = 'flex';
            modalImg.src = this.href;
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.src = ''; 
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });

    function closeModal(modalBlock, background) {
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modalBlock.style.opacity = 1 - progress;
                if (progress === 1) {
                    modalBlock.style.display = 'none';
                    background.style.display = 'none';
                }
            }
        });
    }

    function openModal(modalBlock, background) {
        modalBlock.style.display = 'block';
        background.style.display = 'block';
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modalBlock.style.opacity = progress;
            }
        });
    }

    serviceOpenButtons.forEach((button) => {
        button.addEventListener('click', () => openModal(serviceModal, overlay));
    });

    headerOpenButton.addEventListener('click', () => openModal(headerModal, overlay));

    document.addEventListener('click', (e) => {
        if (e.target === overlay) {
            if (headerModal.style.display === 'block') {
                closeModal(headerModal, overlay);
            } else if (serviceModal.style.display === 'block') {
                closeModal(serviceModal, overlay);
            }
        } else if (e.target.classList.contains('header-modal__close')) {
            closeModal(headerModal, overlay);
        } else if (e.target.classList.contains('services-modal__close')) {
            closeModal(serviceModal, overlay);
        }
        if(!e.target.closest('.sertificate-document')){
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });
}
