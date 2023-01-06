var i = 0;
var images = [];
var time = 1500;

images[0] = "/images/hongkong.jpeg";
images[1] = "/images/macau.jpeg";
images[2] = "/images/taiwan.jpeg";

function changeImg(){
    document.slider.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
        setTimeout("changeImg()", time);
    }

    window.onload = changeImg;

