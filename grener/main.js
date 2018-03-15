/*eslint-env browser*/



// Get modal element
var modal = document.getElementsByClassName('modal');
// Get open modal button
var btn = document.getElementsByClassName('button');


// Get close button
var closeBtn = document.getElementsByClassName('closeBtn');

// BLOCK

btn[0].onclick = function() {
    modal[0].style.display = 'block';
}

btn[1].onclick = function() {
    modal[1].style.display = 'block';
}

btn[2].onclick = function() {
    modal[2].style.display = 'block';
}

btn[3].onclick = function() {
    modal[3].style.display = 'block';
}

btn[4].onclick = function() {
    modal[4].style.display = 'block';
}

btn[5].onclick = function() {
    modal[5].style.display = 'block';
}

btn[6].onclick = function() {
    modal[6].style.display = 'block';
}

btn[7].onclick = function() {
    modal[7].style.display = 'block';
}

btn[8].onclick = function() {
    modal[8].style.display = 'block';
}

btn[9].onclick = function() {
    modal[9].style.display = 'block';
}

btn[10].onclick = function() {
    modal[10].style.display = 'block';
}

btn[11].onclick = function() {
    modal[11].style.display = 'block';
}

btn[12].onclick = function() {
    modal[12].style.display = 'block';
}

btn[13].onclick = function() {
    modal[13].style.display = 'block';
}

btn[14].onclick = function() {
    modal[14].style.display = 'block';
}

btn[15].onclick = function() {
    modal[15].style.display = 'block';
}

btn[16].onclick = function() {
    modal[16].style.display = 'block';
}

btn[17].onclick = function() {
    modal[17].style.display = 'block';
}

btn[18].onclick = function() {
    modal[18].style.display = 'block';
}

// NONE

closeBtn[0].onclick = function() {
    modal[0].style.display = 'none';
}

closeBtn[1].onclick = function() {
    modal[1].style.display = 'none';
}

closeBtn[2].onclick = function() {
    modal[2].style.display = 'none';
}

closeBtn[3].onclick = function() {
    modal[3].style.display = 'none';
}

closeBtn[4].onclick = function() {
    modal[4].style.display = 'none';
}

closeBtn[5].onclick = function() {
    modal[5].style.display = 'none';
}

closeBtn[6].onclick = function() {
    modal[6].style.display = 'none';
}

closeBtn[7].onclick = function() {
    modal[7].style.display = 'none';
}

closeBtn[8].onclick = function() {
    modal[8].style.display = 'none';
}

closeBtn[9].onclick = function() {
    modal[9].style.display = 'none';
}

closeBtn[10].onclick = function() {
    modal[10].style.display = 'none';
}

closeBtn[11].onclick = function() {
    modal[11].style.display = 'none';
}

closeBtn[12].onclick = function() {
    modal[12].style.display = 'none';
}

closeBtn[13].onclick = function() {
    modal[13].style.display = 'none';
}

closeBtn[14].onclick = function() {
    modal[14].style.display = 'none';
}

closeBtn[15].onclick = function() {
    modal[15].style.display = 'none';
}

closeBtn[16].onclick = function() {
    modal[16].style.display = 'none';
}

closeBtn[17].onclick = function() {
    modal[17].style.display = 'none';
}

closeBtn[18].onclick = function() {
    modal[18].style.display = 'none';
}



window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
    if (event.target == modal[2]) {
        modal[2].style.display = "none";
    }
    if (event.target == modal[3]) {
        modal[3].style.display = "none";
    }
    if (event.target == modal[4]) {
        modal[4].style.display = "none";
    }
    if (event.target == modal[5]) {
        modal[5].style.display = "none";
    }
    if (event.target == modal[6]) {
        modal[6].style.display = "none";
    }
    if (event.target == modal[7]) {
        modal[7].style.display = "none";
    }
    if (event.target == modal[8]) {
        modal[8].style.display = "none";
    }
    if (event.target == modal[9]) {
        modal[9].style.display = "none";
    }
    if (event.target == modal[10]) {
        modal[10].style.display = "none";
    }
    if (event.target == modal[11]) {
        modal[11].style.display = "none";
    }
    if (event.target == modal[12]) {
        modal[12].style.display = "none";
    }
    if (event.target == modal[13]) {
        modal[13].style.display = "none";
    }
    if (event.target == modal[14]) {
        modal[14].style.display = "none";
    }
    if (event.target == modal[15]) {
        modal[15].style.display = "none";
    }
    if (event.target == modal[16]) {
        modal[16].style.display = "none";
    }
    if (event.target == modal[17]) {
        modal[17].style.display = "none";
    }
    if (event.target == modal[18]) {
        modal[18].style.display = "none";
    }
}

//var audio = document.getElementsByTagName("audio")[0];
$(document).ready(function(){
    var audio = $("#vader")[0];
    $("nav a").mouseenter(function(){
        audio.play();
    });
});






