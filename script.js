var num=document.querySelector("#container")
var love=document.querySelector("i")

num.addEventListener("dblclick",function(){
    love.style.transform='translate(-50%,-50%) scale(1)'
    love.style.opacity=0.7
    //it is brousers functions make some delay in program
    setTimeout(function(){
        love.style.opacity=0
    },1000);
    setTimeout(function(){
    love.style.transform='translate(-50%,-50%) scale(0)'
    },2000);
})


