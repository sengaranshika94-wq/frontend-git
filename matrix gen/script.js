const para=document.querySelector('p');
const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text=para.innerText
let iteration=0;
function changetext(){
   
    const str=text.split("").map((ele,idx)=>{
         if(idx<iteration){
            return ele
         }

        return characters.split("")[Math.floor(Math.random()*53)]

    }).join("")

    para.innerText=str
    iteration+=0.4

}
para.addEventListener("mouseenter",function(){
    setInterval(changetext,30)
})
