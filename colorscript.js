var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")
var num = 3;
var colors = getColors(num);
var squares = document.querySelectorAll(".square")
var span = document.querySelector("span");
var demo = document.querySelector("#demo");
var reset = document.querySelector("#reset")
var cntr0 = document.querySelector("#container0")
var pickedColor = pickColor();
easy.style.background="yellow";
span.innerHTML = pickedColor;
var i = 0;
for (i = 0; i < colors.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {
        if (this.style.background === pickedColor) {
            cntr0.style.background=pickedColor;
            demo.innerHTML = "correct!!";
            for(i=0;i<colors.length;i++){
            squares[i].style.background = pickedColor;
            }
        }
        else {
            demo.innerHTML = "Select Anothe!!Wrong!!"
            this.style.background = "#232323"
        }
    })
}
reset.addEventListener("click", function(){
    easy.style.background="yellow";
    cntr0.style.background = "#232323"
    colors = getColors(num);
    pickedColor = pickColor();
    span.innerHTML = pickedColor;
    demo.innerHTML = "result";
    for(i=0;i<squares.length;i++){
        squares[i].style.background="#232323";
    }
    for (i = 0; i < num; i++) {
        squares[i].style.background = colors[i];
    }
})
easy.addEventListener("click", function () {
    easy.style.background="yellow";
    hard.style.background="wheat";
    var num = 3;
    resets(num);
})
hard.addEventListener("click", function () {
    hard.style.background="yellow";
    easy.style.background="wheat";
    var num = 6;
    resets(num);
})
function getColors(num) {
    var arr = [];
    var red, blue, green;
    for (i = 0; i < num; i++) {
        red = Math.floor(Math.random() * 256)
        blue = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256)
        arr[i] = "rgb(" + red + ", " + blue + ", " + green + ")";
    }
    return arr;
}
function pickColor() {
    var colorNum = Math.floor(Math.random() * num + 1);
    if (colorNum === 3 || colorNum === 6) {
        colorNum = 0;
    }
    return colors[colorNum];
}
function resets(num) {
    cntr0.style.background = "#232323"
    colors = getColors(num);
    pickedColor = pickColor();
    span.innerHTML = pickedColor;
    demo.innerHTML = "result";
    for(i=0;i<squares.length;i++){
        squares[i].style.background="#232323";
    }
    for (i = 0; i < num; i++) {
        squares[i].style.background = colors[i];
    }
}



