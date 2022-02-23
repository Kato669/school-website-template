let date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();


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