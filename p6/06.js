let elem=document.querySelector(".ele");
let main=document.querySelector(".main")
let img=document.querySelector(".ele img");
elem.addEventListener("mousemove",function(dept){
img.style.left=dept.x+"px"
img.style.top=dept.y+"px"
})
elem.addEventListener("mousleave",function(dept){
   img.style.opacity=1
    })