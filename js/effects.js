const titulo1 = document.querySelector('.titulo1');
const titulo2 = document.querySelector('.titulo2');
const titulo3 = document.querySelector('.titulo3');

const styleContent1 = document.querySelector(".style-content1");
const styleContent2 = document.querySelector(".style-content2");
const styleContent3 = document.querySelector(".style-content3");

const blur1 = () => {
   titulo1.classList.add('blur-titulos');
   styleContent1.style.opacity = 0.8;
   titulo1.addEventListener('mouseover', blur1);

}

const blur1_out = () => {
   titulo1.classList.remove('blur-titulos');
   styleContent1.style.opacity = 0;
   titulo1.addEventListener('mouseout', blur1_out);

}

const blur2 = () => {
   titulo2.classList.add('blur-titulos');
   styleContent2.style.opacity = 0.8;
   titulo2.addEventListener('mouseover', blur2);

}

const blur2_out = () => {
   titulo2.classList.remove('blur-titulos');
   styleContent2.style.opacity = 0;
   titulo2.addEventListener('mouseout', blur2_out);

}

const blur3 = () => {
   titulo3.classList.add('blur-titulos');
   styleContent3.style.opacity = 0.8;
   titulo3.addEventListener('mouseover', blur3);

}

const blur3_out = () => {
   titulo3.classList.remove('blur-titulos');
   styleContent3.style.opacity = 0;
   titulo3.addEventListener('mouseout', blur3_out);

}

styleContent1.addEventListener('mouseover', blur1);
styleContent1.addEventListener('mouseout', blur1_out);
styleContent2.addEventListener('mouseover', blur2);
styleContent2.addEventListener('mouseout', blur2_out);
styleContent3.addEventListener('mouseover', blur3);
styleContent3.addEventListener('mouseout', blur3_out);