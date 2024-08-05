//Efeito carrossel
const imageCarousel01 = document.querySelector('.image-carousel-1');
const imageCarousel02 = document.querySelector('.image-carousel-2');
const imageCarousel03 = document.querySelector('.image-carousel-3');
const imageCarousel04 = document.querySelector('.image-carousel-4');
const imageCarousel05 = document.querySelector('.image-carousel-5');

setInterval(() => {
    imageCarousel01.style.display = 'block';
    imageCarousel02.style.display = 'none';
    imageCarousel03.style.display = 'none';
    imageCarousel04.style.display = 'none';
    imageCarousel05.style.display = 'none';
}, 2000);

setInterval(() => {
    imageCarousel01.style.display = 'none';
    imageCarousel02.style.display = 'block';
    imageCarousel03.style.display = 'none';
    imageCarousel04.style.display = 'none';
    imageCarousel05.style.display = 'none';
}, 4000);

setInterval(() => {
    imageCarousel01.style.display = 'none';
    imageCarousel02.style.display = 'none';
    imageCarousel03.style.display = 'block';
    imageCarousel04.style.display = 'none';
    imageCarousel05.style.display = 'none';
}, 6000);

setInterval(() => {
    imageCarousel01.style.display = 'none';
    imageCarousel02.style.display = 'none';
    imageCarousel03.style.display = 'none';
    imageCarousel04.style.display = 'block';
    imageCarousel05.style.display = 'none';
}, 7000);

setInterval(() => {
    imageCarousel01.style.display = 'none';
    imageCarousel02.style.display = 'none';
    imageCarousel03.style.display = 'none';
    imageCarousel04.style.display = 'none';
    imageCarousel05.style.display = 'block';
}, 9000);



