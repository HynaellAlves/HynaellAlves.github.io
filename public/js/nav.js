const bnt_sobre = document.querySelector('.sobre');
const bnt_social = document.querySelector('.sociais');
const start = document.querySelector('.started');
const sobre = document.querySelector('.section-1');
const sociais = document.querySelector('.section-2');

const width = window.innerWidth;
console.log(width);

var active;

bnt_sobre.addEventListener('click', () => {

   start.style.display = 'none';

   active = 1;

   if (active == 1) {
      bnt_sobre.classList.add('active');
      bnt_social.classList.remove('active');
      sobre.style.display = 'flex';
      sociais.style.display = 'none';

   };

});

bnt_social.addEventListener('click', () => {

   start.style.display = 'none';

   active = 2;

   if (active == 2) {
      bnt_social.classList.add('active');
      bnt_sobre.classList.remove('active');
      sobre.style.display = 'none';
      sociais.style.display = 'flex';

   };
});

