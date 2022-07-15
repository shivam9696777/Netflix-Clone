let nav=document.getElementById("nav")
const start=()=>{
    if(nv.style.display=="none"){
        nv.style.display="block"
        nv.style.textAlign="left"
        }

else {
nv.style.display="none"
}
}
function shiv(){
let shivslide=document.querySelector("shiv-slide")
let list=document.querySelector("shiv-list")
let item=document.querySelector("shiv-item")
let list2
const speed=1
const width=list.offsetWidth
let x=0
let x2=width
function clone(){
    list2=list.cloneNode(true)
    shivslide.appendChild(list2)
    list2.style.left='${width}px'
}
function moveFirest(){
    x-=speed
    if(width>=Math.abs(x)){
        list.style.left='${x}px'
    }else{
     x=width   
    }
}
function moveSecond(){
    x2-=speed
    if(list.offsetWidth>=Math.abs(x2)){
        list.style.left='${x2}px'
    }else{
     x2=width   
    }
}
function hover(){
    clearInterval(f)
    clearInterval(s)
}
function unhover(){
   f=setInterval(moveFirest,10) 
   s=setInterval(moveSecond,10) 
}
clone()
let  f=setInterval(moveFirest,10) 
let  s=setInterval(moveSecond,1)
shivslide.addEventListener("mouseenter",hover) 
shivslide.addEventListener("mouseenter",unhover) 

}
shiv()