// navbar style

window.addEventListener('scroll',()=>{
   document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0) 
})

// faq
const faqs = document.querySelectorAll('.faq');

faqs.forEach(element => {
   element.addEventListener('click',()=>{
      element.classList.toggle('open');
      const icon = element.querySelector('.faq_icon i');
      if(icon.className === 'fa-solid fa-plus'){
         icon.className='fa-solid fa-minus';

      }
      else{
         icon.className='fa-solid fa-plus';
      }
   })

})

// responsive menu
const menu = document.querySelector('.menu');
const menubtn = document.querySelector('#open-menu');
const closebtn = document.querySelector('#close-btn');

menubtn.addEventListener('click',()=>{
   menu.style.display = "flex";
   closebtn.style.display="inline-block";
   menubtn.style.display="none"
})

const closenav= ()=>{
   menu.style.display = "none";
   closebtn.style.display="none";
   menubtn.style.display="inline-block"
}

closebtn.addEventListener('click',closenav);