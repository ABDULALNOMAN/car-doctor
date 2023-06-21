let sliderIndex = 1
const rightButtonFunc =(n)=>{
    sliderFunc(sliderIndex+=n)
}
const leftButtonFunc =(n)=>{
    sliderFunc(sliderIndex-=n)
}
const buttonClickFunc =(n)=>{
    sliderFunc(sliderIndex = n)
}
const sliderFunc =(data)=>{
  const mySlide = document.querySelectorAll(".mySlides")
  const button = document.getElementsByClassName("rounded-button")
  if(data<=0){
    sliderIndex = mySlide.length
  }
  if(data>=mySlide.length){
    sliderIndex = 0
  }
  for(let i = 0; i<mySlide.length; i++){
    mySlide[i].style = `
    display:none;
    `;
    button[i].style.filter="brightness(30%)"
  }
  mySlide[sliderIndex].style = `
    display:block;
  `
  button[sliderIndex].style.filter="brightness(1)"
}
setInterval(() => {
  rightButtonFunc(1)
}, 800000);
sliderFunc(3)

// card start

const card = document.getElementById("card")

const fachingFunc = async()=>{
    const res = await fetch("../json/cards.json")
    const datas = await res.json()
    itemFunc(datas)
}
function itemFunc(datas){
    for (const data of datas) {
        const div = document.createElement("div")
        div.classList.add(".card")
        div.innerHTML =`
                <img class="card-image" src=${data?.image} alt="image">
                <h1>name :${data?.heading}</h1>
                <p>price :${data?.price}</p> 
        `
        card.appendChild(div)
    }
}
fachingFunc()