
const pianoSounds = {
  a:new Audio("28.mp3"),
  b:new Audio("30.mp3"),
  c:new Audio("32.mp3"),
  d:new Audio("33.mp3"),
  e:new Audio("35.mp3"),
  f:new Audio("37.mp3"),
  g:new Audio("39.mp3"),
  h:new Audio("41.mp3"),
  i:new Audio("43.mp3"),
  j:new Audio("44.mp3"),
  
  p:new Audio("1b.mp3"),
  q:new Audio("2b.mp3"),
  r:new Audio("3b.mp3"),
  s:new Audio("4b.mp3"),
  t:new Audio("5b.mp3"),
  u:new Audio("7b.mp3"),
  v:new Audio("8b.mp3"),

};
function playpiano(key){
    if(!pianoSounds[key]) return;
    
    pianoSounds[key].currentTime=0;
    pianoSounds[key].play();
}
document.addEventListener("keydown",function(val){
    playpiano(val.key.toLowerCase()); 
})
document.querySelectorAll(".whitekeys, .blackey").forEach(function(val){
    val.addEventListener("click",function(){
        playpiano(val.dataset.key);
    })
})