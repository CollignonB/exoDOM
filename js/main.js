// let choiceColor = document.getElementsByTagName("div");

// let style = window.getComputedStyle(choiceColor[0]);
// console.log(style.background);


// for (let i = 0; i < choiceColor.length - 1; i ++) {

//     choiceColor[i].addEventListener("click", function () {
//         choiceColor[4].style.backgroundColor =  window.getComputedStyle(choiceColor[i]).backgroundColor;
//     });
// }


const imgSrc = [
    "img/devMeme1.jpg",
    "img/devMeme2.jpg",
    "img/devMeme3.jpg",
    "img/devMeme4.png"
]

let img = document.getElementsByClassName("myIMG");
let Bimg = document.getElementById("myBImg");

for (let i = 0; i< img.length; i++){
    img[i].src = imgSrc[i];
}

for(let i =0; i<img.length; i++){
    img[i].addEventListener("click", function () {
        Bimg.src = this.src;
    })
}