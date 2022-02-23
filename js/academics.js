//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


/*======
switching primary and nursery
=======*/
let btn_nursery = document.querySelector('.btn-nursery');
let btn_primes = document.querySelector('.btn-primes');
let nursery_content = document.querySelector('.nursery-content');
let primary_content = document.querySelector('.primary-content');

btn_primes.addEventListener('click',(e)=>{
  e.preventDefault()
  nursery_content.classList.add('active');
  primary_content.classList.add('active');
  btn_nursery.classList.add('active')
  btn_primes.classList.add('active')
})
btn_nursery.addEventListener('click',(e)=>{
  e.preventDefault()
  nursery_content.classList.remove('active');
  primary_content.classList.remove('active');
  btn_nursery.classList.remove('active')
  btn_primes.classList.remove('active')
})
/*======
switching primary and nursery end
=======*/


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