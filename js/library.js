let date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

let btn_nursery =document.querySelector('.btn-nursery')
let btn_primes =document.querySelector('.btn-primes')
let shows = document.querySelector('.shows1')
let hide = document.querySelector('.hide')

btn_primes.addEventListener('click',(e)=>{
    e.preventDefault();
    shows.classList.add('active');
    hide.classList.add('active');
    btn_nursery.classList.add('active');
    btn_primes.classList.add('active')
})
btn_nursery.addEventListener('click',(e)=>{
    e.preventDefault();
    shows.classList.remove('active');
    hide.classList.remove('active');
    btn_nursery.classList.remove('active');
    btn_primes.classList.remove('active')
})

/*======
up arrow
=========*/
let TopBottom = document.getElementById('up-icon');
window.onscroll = ()=>{
   if(window.scrollY >= 130){
       TopBottom.classList.add('active');
       TopBottom.style.transition = `all 2s`
   }else{
      TopBottom.classList.remove('active');
   }
  
}
TopBottom.addEventListener('click',()=>{
   window.scrollTo({top:0, behavior:'smooth'})
})
/*======
up arrow end
=========*/