

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    image;
    title;
    url;
    
    static _sequence;
    static _size;
    static _interval;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    };
    
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        let el = document.getElementById("carousel");

        el.style.backgroundImage = "url(img/" + carouselArr[this._sequence].image + ")";
        el.style.backgroundSize = "contain";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "top center";
        
        document.getElementById("carousel-title").innerHTML = "<p><a href='" + carouselArr[this._sequence].url + "'>" + carouselArr[this._sequence].title + "</a></p>"; 

        Carousel._sequence += 1;

        if(Carousel._sequence >= Carousel._size)
            Carousel._sequence = 0;
    }
};
