let main=document.querySelector(".main");
let csr=document.querySelector(".cursor");

main.addEventListener("mousemove", function(dept){
   csr.style.left=dept.x+"px";
   csr.style.top=dept.y+"px";
   csr.style.right=dept.x+"px";
   console.log("cursor correct move ho raha haii");
   

    
})