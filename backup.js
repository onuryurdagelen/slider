let startingIndex = 0;
// let endingIndex = 3;

function forwardIndex(n) {
    showSlides(startingIndex+=n);
 
}
function backwardIndex(n) {
    showSlides(startingIndex+=n);
}

function currentSlides() {
    showSlides(startingIndex);
}
rightArrow.addEventListener("click",()=>{
    forwardIndex(+4);
})

leftArrow.addEventListener("click",()=>{
    console.log('girdi left');

    backwardIndex(-4);
})

function showSlides(start) {
    

  
   

    
    // console.log(startSlide.clientWidth  * start);
    
   

    
}
currentSlides();