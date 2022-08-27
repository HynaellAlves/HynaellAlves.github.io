const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');

const options1 = document.querySelector('.options1');
const options2 = document.querySelector('.options2');
const options3 = document.querySelector('.options3');

var on1 = false;
var on2 = false;
var on3 = false;

const options_1 = () => {

   if (on1 == true) {

      options1.style.display = 'none';
      options1.classList.remove('options_animation');
      on1 = false

   } else {

      options1.style.display = 'flex';
      options1.classList.add('options_animation');
      on1 = true;

   }


}

const options_2 = () => {

   if (on2 == true) {

      options2.style.display = 'none';
      options2.classList.remove('options_animation');
      on2 = false

   } else {

      options2.style.display = 'flex';
      options2.classList.add('options_animation');
      on2 = true;
   }


}

const options_3 = () => {

   if (on3 == true) {

      options3.classList.remove('options_animation');
      options3.classList.add('options_animation_out');

      setTimeout(() => {
         options3.style.display = 'none';
      }, 250);

      on3 = false

   } else {

      options3.style.display = 'flex';
      options3.classList.add('options_animation');
      options3.classList.remove('options_animation_out');
      on3 = true;
   }


}

content1.addEventListener('click', options_1);
content2.addEventListener('click', options_2);
content3.addEventListener('click', options_3);