let date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

let show_more = document.getElementById('show-more');
let shows = document.getElementById('shows');
let hide = document.getElementById('hide');

show_more.addEventListener('click',(e)=>{
    e.preventDefault();
    show_more.style.display = 'none';
    shows.classList.add('active')
    hide.classList.add('active')
})
hide.addEventListener('click',(e)=>{
    e.preventDefault();
    show_more.style.display = 'block';
    shows.classList.remove('active')
    hide.classList.remove('active')
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