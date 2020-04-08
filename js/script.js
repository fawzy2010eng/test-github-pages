'use strict'
//the menu button show and hide
var menubtn = document.getElementById('menubtn');
var hddnmnu = document.getElementsByClassName('hiddenmenu')[0];
var closemenu = document.getElementById('closemenu');

var showmenu = function(){
    var pos = -300;
    var id = setInterval(frame, 2);
    function frame() {
        if(pos < 0){
            pos++; 
            hddnmnu.style.right = pos + 'px';    
        }
                 
    }
    menubtn.style.display = 'none'
}

menubtn.addEventListener('click', showmenu);

var hidemenu = function(callback){
    var pos = 0;
    var id = setInterval(frame, 2);
    function frame() {
        if(pos > -300){
            pos--; 
            hddnmnu.style.right = pos + 'px';    
        }
                 
    }
    menubtn.style.display = 'block'
    
}

closemenu.addEventListener('click', hidemenu);



//the delay of the main paragraph

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
