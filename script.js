var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    },
    {
        name : 'BMW 320i',
        image : 'img/istockphoto-152143795-1024x1024.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    },
    {
        name : 'Mercedes c200d',
        image : 'img/istockphoto-472041510-1024x1024.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    },
    {
        name : 'BMW 730',
        image : 'img/istockphoto-499192799-1024x1024.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

const container = document.querySelector(".slider-main");
const leftArrow = document.querySelector(".fa-arrow-circle-left");
// console.log(leftArrow);
const rightArrow = document.querySelector(".fa-arrow-circle-right");
console.log(rightArrow);

models.forEach(element => {
    container.innerHTML += `
    <div class="item">
    <div class="text">1</div>
  </div>
    
    `
});





