const topLogo = document.querySelector('.top-logo');
const btnDarkMode = document.querySelector('.darkmode');
const navBar = document.querySelector('.navBar');
const tituloCentral = document.querySelector('.central-title');
const subTitle01 = document.querySelector('.subTitulos01');
const subTitle02 = document.querySelector('.subTitulos02');
const subTitle03 = document.querySelector('.subTitulos03');
const titleAbout = document.querySelector('.title-about');
const textAbout = document.querySelector('.text-about');
const contentFooter = document.querySelector('.content-footer');
const textFooter = document.querySelector('.text-footer');
const logoFooter = document.querySelector('.imagem-footer');

btnDarkMode.addEventListener('click', function(event) {
    event.preventDefault();

    navBar.classList = 'displayNavBarDark';
    tituloCentral.style.backgroundColor = 'black';
    subTitle01.style.backgroundColor = 'black';
    subTitle02.style.backgroundColor = 'black';
    subTitle03.style.backgroundColor = 'black';
    titleAbout.style.backgroundColor = 'black';
    textAbout.classList = 'displayTextAbout';
    contentFooter.classList = 'displayContentFooter';
    textFooter.classList = 'textFooter';
    topLogo.classList = 'displayTopLogo';
    logoFooter.classList = 'displayLogoFooter';
});

btnDarkMode.addEventListener('dblclick', function(event) {
    event.preventDefault();

    navBar.classList = 'displayNavBarWhite';
    tituloCentral.style.backgroundColor = '#E30613';
    subTitle01.style.backgroundColor = '#E30613';
    subTitle01.style.backgroundColor = '#E30613';
    subTitle02.style.backgroundColor = '#E30613';
    subTitle03.style.backgroundColor = '#E30613';
    titleAbout.style.backgroundColor = '#E30613';
    textAbout.classList = 'text-about';
    contentFooter.classList = 'content-footer';
    textFooter.classList = 'logo-footer';
    topLogo.classList = 'top-logo';
    logoFooter.classList = '';
});