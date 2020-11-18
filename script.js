let prev = document.getElementById('prev'); // захватываем стрелку ( предыдущая )//
let next = document.getElementById('next'); // захватываем стрелку ( следующая)//

let picture = document.querySelector('.zoom'); // захватываем фото для переключения //

let banner = document.querySelector('.banner'); // захват баннер для смены фона //

let backgroundImg = new Array( // делаем масив с кртинками //
    'img/b1.jpg',
    'img/b2.jpg',
    'img/b3.jpg',
    'img/b4.jpg',
    'img/b5.jpg',
);

let i = 0;

next.onclick = function() {

    if(i < 4) {
    
    banner.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
    // picture[i+1].classList.add('active');
    // picture[i].classList.remove('active');
    i++;

    }
}

prev.onclick = function() {

    if(i > 0) {
    
    banner.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
    // picture[i-1].classList.add('active');
    // picture[i].classList.remove('active');
    i--;
    
    }
}