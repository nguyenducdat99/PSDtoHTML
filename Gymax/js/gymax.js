// run for slider
var frameSize = document.getElementById('slider').clientWidth;
let select1 = document.getElementById('select-1');
select1.style.backgroundColor = "red";

var btn1 = () => {
    let frame = document.getElementById('slider');
    let select1 = document.getElementById('select-1');
    let select2 = document.getElementById('select-2');
    let select3 = document.getElementById('select-3');

    frame.style.marginLeft = 0 + "px";
    select1.style.backgroundColor = "#dd2f31";
    select2.style.backgroundColor = "gray";
    select3.style.backgroundColor = "gray";
}
var btn2 = () => {
    let frame = document.getElementById('slider');
    let select1 = document.getElementById('select-1');
    let select2 = document.getElementById('select-2');
    let select3 = document.getElementById('select-3');

    frame.style.marginLeft = "-" + (frameSize/3) + "px";
    select1.style.backgroundColor = "gray";
    select2.style.backgroundColor = "#dd2f31";
    select3.style.backgroundColor = "gray";
}
var btn3 = () => {
    let frame = document.getElementById('slider');
    let select1 = document.getElementById('select-1');
    let select2 = document.getElementById('select-2');
    let select3 = document.getElementById('select-3');

    frame.style.marginLeft = "-" + 2*(frameSize/3) + "px";
    select1.style.backgroundColor = "gray ";
    select2.style.backgroundColor = "gray";
    select3.style.backgroundColor = "#dd2f31";
}
