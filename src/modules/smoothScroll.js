export function scroll(){
    document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollButton = document.querySelector('.smooth-scroll');
    const firstSection = document.querySelector('#offer'); 
    window.addEventListener('scroll', () => {
      if (!firstSection) return;

      const sectionBottom = firstSection.getBoundingClientRect().bottom;
      if (sectionBottom < 0) { 
        smoothScrollButton.style.display = 'block';
      } else {
        smoothScrollButton.style.display = 'none';
      }
    });

    smoothScrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}