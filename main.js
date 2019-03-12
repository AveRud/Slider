
let button1 = document.querySelector('.gallery .buttons .back');
let button2 = document.querySelector('.gallery .buttons .forward');

let images = document.querySelectorAll('.gallery .photos img');
//console.log(images);

let i = 0;

button1.onclick = function () {
    images[i].style.display = 'none';
    i--;

    if (i < 0) {
        i = images.length -1;
    }

    images[i].style.display = 'block';
}


button2.onclick = function () {
    images[i].style.display = 'none';
    i++;

    if (i >= images.length) {
        i =0;
    }

    images[i].style.display = 'block';
}

