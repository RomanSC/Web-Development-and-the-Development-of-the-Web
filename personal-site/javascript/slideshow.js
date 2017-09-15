/*  slideshow.js | Roman S. Collins | Thu, Sep 14, 2017

    A javascript slideshow.

*/

// print("DEBUG: starting script...");

var images = ["./img/img0.jpg", "./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg"] 

var caption = ["./img/img0.jpg", "./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg"] 

var i = 0;
var len = images.length - 1;

function changeImg(x) {
    i += x;

    // for (i = 0; i < len; i++) {

    //     if (i == len) {
    //     } else {
    //         i = 0;
    //     }

    //     document.getElementById("slideshow").src = images[i]; 
    //     document.getElementById("caption").innerHTML = "test"; 

    // }

    if (i > len) {
        i = 0;
    }

    if (i < 0) {
        i = len;
    }

    document.getElementById("slideshow").src = images[i]; 
    document.getElementById("caption").innerHTML = images[i];    

    return false;
}
