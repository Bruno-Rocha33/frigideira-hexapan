/* Script Slides*/

var slideIndex = 1;
var t = setInterval(function () {
  plusDivs(1);
}, 5000);

showDivs(slideIndex);
//FUNCIONES PLAY/PAUSE AÑADIDAS POR KIP13
function changeState(el) {
  var text = '';
  if (!t) {
    t = setInterval(function () {
      plusDivs(1);
    }, 5000);
    text = 'PAUSAR';
  } else {
    clearInterval(t);
    t = false;
    text = 'PLAY';
  }
  el.innerText= text;
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  /* for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" w3-white", "");
            }*/
  x[slideIndex - 1].style.display = "block";
  //dots[slideIndex - 1].className += " w3-white";
}


/* Script Play Video*/


$('#playerID').click(function(){
  var videoURL = $('#VdoID').attr('src'),
  dataplay = $('#VdoID').attr('data-play');

  //for check autoplay
  //if not set autoplay=1
  if(dataplay == 0 ){
      $('#VdoID').attr('src',videoURL+'?autoplay=1');
      $('#VdoID').attr('data-play',1);
   }
   else{
      var videoURL = $('#VdoID').attr('src');
      videoURL = videoURL.replace("?autoplay=1", "");
      $('#VdoID').prop('src','');
      $('#VdoID').prop('src',videoURL);

      $('#VdoID').attr('data-play',0);
   }

});






