let main=document.querySelector("main")
let btn=document.querySelector("button")
const arr = [
  "Life is not about waiting for the storm to pass, but learning to dance in the rain.",
  "Every day is a new chance to become a better version of yourself.",
  "Your life does not get better by chance, it gets better by change.",
  "Small steps every day lead to big changes over time.",
  "Life is tough, but so are you.",
  "Happiness comes when you stop comparing your life to others.",
  "Do what makes your soul feel alive.",
  "Mistakes are proof that you are trying.",
  "Believe in yourself even when no one else does.",
  "Life becomes easier when you learn to accept what you cannot control.",
  "Grow through what you go through.",
  "Your journey is your own—walk it proudly."
];

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*arr.length)
    let x=Math.random()*100;
    let y=Math.random()*100;
    let c1= Math.floor(Math.random()*256)
    let c2= Math.floor(Math.random()*256)
    let c3= Math.floor(Math.random()*256)
    let rot= Math.floor(Math.random()*360)
    let sc= Math.random()*3
    let h1=document.createElement("h1")
    h1.innerHTML=arr[random]
    h1.style.position="absolute"
    h1.style.color=`rgb(${c1},${c2},${c3})`
    h1.style.left= x+"%"
    h1.style.top= y+"%"
    h1.style.rotate= rot+"deg"
    h1.style.scale=sc
    main.appendChild(h1)
})