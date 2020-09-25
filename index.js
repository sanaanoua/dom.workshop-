
//1: 
const body = document.body
console.log(body)
body.style.backgroundColor= "#FFA07A"; 
// 2: 

const text= document.getElementById("replace-text"); 
console.log(text)
text.innerHTML="I can do <em>Whatever</em> I want with Javascript"; 
text.style.color= "#CD5C5C";
text.style.fontSize='2rem';


// 3: 
const bleu = document.getElementsByClassName('blue');
console.log(bleu)
for ( let i=0; i < bleu.length; i++){
  console.log(i)
  console.log(bleu[i])
  
  bleu[i].style.color="#2471a3";
} 

//4;
const openBtn = document.getElementById('open-modal')
console.log(openBtn)
const modal = document.getElementById('modal')
console.log(modal)
const closeBtn = document.getElementById('close-modal')
console.log(closeBtn)

openBtn.addEventListener("click",(event) => {
  console.log("I clicked")
  modal.style.display = 'block'
})  

closeBtn.addEventListener("click",(event) => {
  console.log('I am closing')
  modal.style.display = 'none'
})
 // 5: 
 let texture = document.querySelector('#texture-selector')
 console.log(texture)

 let backImg = document.querySelector('#texture-background')
 console.log(backImg)

 texture.addEventListener('change', (event) => {
   console.log('I am changing')
   console.log(event.target.value)
   backImg.style.backgroundImage = "url('" + event.target.value + "')" 

 })