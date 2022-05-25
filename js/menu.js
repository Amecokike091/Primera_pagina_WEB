const BANNER = document.querySelector('.BANNER');
const MENU = document.querySelector('.menu-navegacion');

console.log(MENU)
console.log(BANNER)


BANNER.addEventListener('click', ()=>{
  MENU.classList.toggle("spread")
})


window.addEventListener('click', e=>{
  if(MENU.classList.contains('spread') && e.target != MENU && e.target != BANNER){

    MENU.classList.toggle("spread")

}
})
