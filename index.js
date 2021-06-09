const button = document.querySelector(".svg");
const details = document.querySelector(".slides");

button.addEventListener('click',() => {
  button.classList.toggle("lit");
    details.classList.toggle("lit");
})

window.addEventListener('scroll',() =>{
  // const hiper = document.querySelector(".imf");
    const hiper = document.querySelector(".first");
  let doff = window.pageYOffset;
  // console.log(doff);
  hiper.style.transform = 'translateY('+ doff*-.3+ 'px)'
})
