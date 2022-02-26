document.addEventListener("DOMContentLoaded", function (event) {
    let targetImage = document.querySelector("#smart-image");
    let font1 = document.querySelector("#click1");
    let targetImage2 = document.querySelector("#smart-image2");

    targetImage.addEventListener("click", function () {

        if (targetImage.classList.contains("small")) {
            targetImage.classList.remove("small");
            targetImage.classList.remove("edging");
            font1.classList.remove("click1");
        } else {
            targetImage.classList.add("small");
            targetImage.classList.add("edging");
        }

    });

    targetImage2.addEventListener("click", function () {

        if (targetImage2.classList.contains("small2")) {
            targetImage2.classList.remove("small2");
            targetImage2.classList.remove("edging2");
        } else {
            targetImage2.classList.add("small2");
            targetImage2.classList.add("edging2");
        }

    });



    // window.onload = function () {
    //     setInterval("toggleSound()", 100);
    // }

    // function toggleSound() {
    //     var music = document.getElementById("vd");//获取ID  

    //     if (music.paused) { //判读是否播放  
    //         music.paused = false;
    //         music.play(); //没有就播放 
    //     }
    // }






});
