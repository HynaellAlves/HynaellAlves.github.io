const bnt_sobre = document.querySelector('.sobre');
const bnt_social = document.querySelector('.sociais');
const sobre = document.querySelector('.section-1');
const sociais = document.querySelector('.section-2');
const nav = document.querySelector('.nav');

const width = window.innerWidth;
console.log(width);

var active;

bnt_sobre.classList.add('active');
sobre.style.display = 'flex';

bnt_sobre.addEventListener('click', () => {

   active = 1;

   if (active == 1) {
      bnt_sobre.classList.add('active');
      bnt_social.classList.remove('active');
      sobre.style.display = 'flex';
      sociais.style.display = 'none';

   };

});

bnt_social.addEventListener('click', () => {

   active = 2;

   if (active == 2) {
      bnt_social.classList.add('active');
      bnt_sobre.classList.remove('active');
      sobre.style.display = 'none';
      sociais.style.display = 'flex';

   };
});

/* --------------------------------- Theme --------------------------------------------------- */

const switchButton = document.querySelector('.js-switchButton');
const svg_image = document.querySelector('.svg-image');
const select = document.querySelector('.select');
const svg = document.querySelector('.svg-image img');

var theme;

const themeInitialized = (() => {

   let theme_color = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
   theme = theme_color;

   console.log(theme);
   document.body.setAttribute('data-theme', theme);

   if (theme == 'dark') {

      svg.src = './img/moon-svgrepo-com.svg'
      switchButton.style.flexDirection = 'row-reverse';
      svg_image.style.borderRadius = '20px 0 0 20px';
      select.style.borderRadius = '0 20px 20px 0';

   } else if (theme == 'light') {

      svg.src = './img/sun-svgrepo-com.svg'
      switchButton.style.flexDirection = 'row';
      svg_image.style.borderRadius = '0 20px 20px 0';
      select.style.borderRadius = '20px 0 0 20px';

   }

});

function switchTheme () {

   if (theme == 'dark') {

      svg.src = './img/sun-svgrepo-com.svg'
      switchButton.style.flexDirection = 'row-reverse';
      svg_image.style.borderRadius = '20px 0 0 20px';
      select.style.borderRadius = '0 20px 20px 0';

      theme = 'light';

   } else if (theme == 'light') {

      svg.src = './img/moon-svgrepo-com.svg'
      switchButton.style.flexDirection = 'row';
      svg_image.style.borderRadius = '0 20px 20px 0';
      select.style.borderRadius = '20px 0 0 20px';

      theme = 'dark';
   }

   document.body.setAttribute('data-theme', theme);

};

addEventListener('load', themeInitialized);
switchButton.addEventListener('click', switchTheme);
