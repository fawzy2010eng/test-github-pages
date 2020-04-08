'use strict'
//the menu button show and hide
var menubtn = document.getElementById('menubtn');
var hddnmnu = document.getElementsByClassName('hiddenmenu')[0];
var closemenu = document.getElementById('closemenu');
menubtn.addEventListener('click', function () {
    hddnmnu.style.display = 'block';
    menubtn.style.display = 'none';
});
closemenu.addEventListener('click', function () {
    hddnmnu.style.display = 'none';
    menubtn.style.display = 'block';
});



//the delay of the main title

var mainp = document.querySelector('.main').querySelector('.container').getElementsByTagName("P")[0];
var txt = 'A responsive business oriented template with a video background designed by templated and released under the Creative CommonsLicense';
var i = 0;
function typeWriter() {
    var speed = 50;
    if (i < txt.length) {
        mainp.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};
typeWriter();