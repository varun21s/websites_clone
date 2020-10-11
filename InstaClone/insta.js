window.onload=()=>
{
    var img0,img1,img2,img3,img4;
    img0=document.getElementById("a0");
    img1=document.getElementById("a1");
    img2=document.getElementById("a2");
    img3=document.getElementById("a3");
    img4=document.getElementById("a4");
     
 setInterval(() => {
    img4.classList.add("hide");
    
 }, 4000);
 setInterval(() => {
    img3.classList.add("hide");
    
   
 }, 8000);
 setInterval(() => {
    img2.classList.add("hide");
    
 }, 12000);
 setInterval(() => {
    img1.classList.add("hide");
    
 }, 16000);
 setInterval(() => {
    img0.classList.add("hide");
    img4.classList.remove("hide");
    img3.classList.remove("hide");
    img2.classList.remove("hide");
    img1.classList.remove("hide");
    img0.classList.remove("hide");
    
 }, 20000);
}