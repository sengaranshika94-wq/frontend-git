// document.addEventListener("mousemove",function(e){
//      console.log(e.clientX, e.clientY)
//     document.style.setProperty("--x", e.clientX + "px")
//     document.style.setProperty("--y", e.clienty + "px")
// })

document.addEventListener("mousemove", function(e) {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
});
