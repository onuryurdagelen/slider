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
    
    var slides = document.getElementsByClassName("card");
    //Left arrow

    var startSlide = document.getElementsByClassName("card")[start];
    console.log("start Slide: ",startSlide);

    var arr = Array.prototype.slice.call( slides )
    console.log("arr length: ",arr.length);

    var slicedArr = arr.slice(start,arr.length);
    container.style.overflow = "visible";

    container.style.transform = `translateX(-${startSlide.clientWidth  * start}px)`;
    console.log(startSlide.clientWidth  * start);
    
    let increasedTransform = startSlide.clientWidth  * start;
    if (start == 0) {
        container.style.transform = `translateX(-${start}px)`;
        leftArrow.style.display = "none";
        return;
    }
    if (slicedArr.length < 4) {
        console.log(slicedArr.length);
        clg
        // console.log((start - slicedArr.length) * startSlide.clientWidth);
        // console.log(startSlide.clientWidth  * start - slicedArr.length * startSlide.clientWidth);
        // console.log(slicedArr.length * startSlide.clientWidth);
         container.style.transform = `translateX(-${increasedTransform - (window.screen.width - (arr.length % start) * startSlide.clientWidth)}px)`;
         console.log( ((arr.length % start) * startSlide.clientWidth));
         rightArrow.style.display = "none";
         console.log("**************************");
        return;
        
    }
   
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";

    
    // console.log(startSlide.clientWidth  * start);
    
   

    
}
currentSlides();