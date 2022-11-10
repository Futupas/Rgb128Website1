'use strict';

const galleryArts = document.querySelectorAll('#gallery > .art-preview');

function checkSimpleDiv() {
    const div = document.getElementById('simple');
    if (!div || div.classList.contains('removing')) {
        window.removeEventListener('scroll', checkSimpleDiv);
        return;
    }
    simple.classList.add('removing');
    setTimeout(() => {
        simple.remove();
    }, 1000);
}
window.addEventListener('scroll', checkSimpleDiv);

function checkGalleryDiv() {
    const artPreview = galleryArts[0];
    const { offsetTop, offsetHeight } = galleryArts[0];
    const screenHeight = document.documentElement.clientHeight;
    const scrollY = window.scrollY;

    const isTop = offsetTop + offsetHeight <= scrollY;
    const isBottom = offsetTop >= scrollY + screenHeight;

    isTop ? artPreview.classList.add('top') : artPreview.classList.remove('top');
    isBottom ? artPreview.classList.add('bottom') : artPreview.classList.remove('bottom');
}
window.addEventListener('scroll', checkGalleryDiv);
