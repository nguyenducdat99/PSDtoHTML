//  .............................import file.....................

//  .............................default seting............................
document.getElementsByClassName("client-say__slider__contents")[0].style.display = "block";
document.getElementsByClassName("client-say__select-1")[0].style.backgroundColor = "red";

// ..............................code for slide click..................................

var index = 0;
var btn1 = (n) =>{
    showSlice(n);
    index = n - 1;
    
}
var btn2 = (n) =>{
    showSlice(n);
    index = n - 1;
}
var btn3 = (n) =>{
    showSlice(n);
    index = n - 1;
}
var showSlice = (n) =>{
    var contents = document.getElementsByClassName("client-say__slider__contents");
    var dot = document.getElementsByClassName("client-say__select-1");

    for(let i=0;i<contents.length;i++){
        contents[i].style.display = "none";
    }
    for(let i=0;i<dot.length;i++){
        dot[i].style.backgroundColor = "gray";
    }
    contents[n-1].style.display = "block";
    dot[n-1].style.backgroundColor = "red";
}

// ..........................code for auto slider.....................
setInterval(autoSlide, 2000);
function autoSlide() {
    var contents = document.getElementsByClassName("client-say__slider__contents");
    var dot = document.getElementsByClassName("client-say__select-1");

    for(let i=0;i<contents.length;i++){
        contents[i].style.display = "none";
    }
    for(let i=0;i<dot.length;i++){
        dot[i].style.backgroundColor = "#cccccc";
    }
    if(index > contents.length-1){index = 0};
    contents[index].style.display = "block";
    dot[index].style.backgroundColor = "#dd2f31";
    index++;
}
