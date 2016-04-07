
var quotes = new Array();

quotes[0] = new Image();
quotes[0].src = 'img/fortune/1.jpg';

quotes[1] = new Image();
quotes[1].src = 'img/fortune/2.jpg';

quotes[2] = new Image();
quotes[2].src = 'img/fortune/3.jpg';

quotes[3] = new Image();
quotes[3].src = 'img/fortune/4.jpg';

quotes[4] = new Image();
quotes[4].src = 'img/fortune/5.jpg';

quotes[5] = new Image();
quotes[5].src = 'img/fortune/6.jpg';

quotes[6] = new Image();
quotes[6].src = 'img/fortune/7.jpg';

quotes[7] = new Image();
quotes[7].src = 'img/fortune/8.jpg';

quotes[8] = new Image();
quotes[8].src = 'img/fortune/9.jpg';

quotes[9] = new Image();
quotes[9].src = 'img/fortune/10.jpg';

quotes[10] = new Image();
quotes[10].src = 'img/fortune/11.jpg';

quotes[11] = new Image();
quotes[11].src = 'img/fortune/12.jpg';

quotes[12] = new Image();
quotes[12].src = 'img/fortune/13.jpg';

quotes[13] = new Image();
quotes[13].src = 'img/fortune/14.jpg';

quotes[14] = new Image();
quotes[14].src = 'img/fortune/15.jpg';

quotes[15] = new Image();
quotes[15].src = 'img/fortune/16.jpg';

quotes[16] = new Image();
quotes[16].src = 'img/fortune/17.jpg';

quotes[17] = new Image();
quotes[17].src = 'img/fortune/18.jpg';

quotes[18] = new Image();
quotes[18].src = 'img/fortune/19.jpg';

quotes[19] = new Image();
quotes[19].src = 'img/fortune/20.jpg';

quotes[20] = new Image();
quotes[20].src = 'img/fortune/21.jpg';

quotes[21] = new Image();
quotes[21].src = 'img/fortune/22.jpg';

quotes[22] = new Image();
quotes[22].src = 'img/fortune/23.jpg';

quotes[23] = new Image();
quotes[23].src = 'img/fortune/24.jpg';

quotes[24] = new Image();
quotes[24].src = 'img/fortune/25.jpg';

quotes[25] = new Image();
quotes[25].src = 'img/fortune/26.jpg';

quotes[26] = new Image();
quotes[26].src = 'img/fortune/27.jpg';

quotes[27] = new Image();
quotes[27].src = 'img/fortune/28.jpg';

quotes[28] = new Image();
quotes[28].src = 'img/fortune/29.jpg';

quotes[29] = new Image();
quotes[29].src = 'img/fortune/30.jpg';

quotes[30] = new Image();
quotes[30].src = 'img/fortune/31.jpg';

quotes[31] = new Image();
quotes[31].src = 'img/fortune/32.jpg';


quotes[32] = new Image();
quotes[32].src = 'img/fortune/33.jpg';


quotes[33] = new Image();
quotes[33].src = 'img/fortune/34.jpg';


quotes[34] = new Image();
quotes[34].src = 'img/fortune/35.jpg';


quotes[35] = new Image();
quotes[35].src = 'img/fortune/36.jpg';


quotes[36] = new Image();
quotes[36].src = 'img/fortune/37.jpg';


quotes[37] = new Image();
quotes[37].src = 'img/fortune/38.jpg';


quotes[38] = new Image();
quotes[38].src = 'img/fortune/39.jpg';


quotes[39] = new Image();
quotes[39].src = 'img/fortune/40.jpg';


quotes[40] = new Image();
quotes[40].src = 'img/fortune/41.jpg';


quotes[41] = new Image();
quotes[41].src = 'img/fortune/42.jpg';


quotes[42] = new Image();
quotes[42].src = 'img/fortune/43.jpg';

quotes[43] = new Image();
quotes[43].src = 'img/fortune/44.jpg';


quotes[44] = new Image();
quotes[44].src = 'img/fortune/45.jpg';


quotes[45] = new Image();
quotes[45].src = 'img/fortune/46.jpg';

quotes[46] = new Image();
quotes[46].src = 'img/fortune/47.jpg';

quotes[47] = new Image();
quotes[47].src = 'img/fortune/48.jpg';

quotes[48] = new Image();
quotes[48].src = 'img/fortune/49.jpg';

quotes[49] = new Image();
quotes[49].src = 'img/fortune/50.jpg';

var quoteButton = document.getElementById('quoteButton');
var quoteDiv = document.getElementById('quoteDiv');

function randomNumber() {
 return Math.floor((Math.random() * quotes.length) );
};

function divQuote() {
  var quotePosition = randomNumber();
  quoteDiv.innerHTML = "<img id=\"quoteimg\" on-hold=\"showDetails()\"src=\"" + quotes[quotePosition].src + "\">";
}

function dlimg() {
  var link = document.createElement('a');
  link.href = document.getElementById('quoteimg').src;
  link.download = 'Download.jpg';
  document.body.appendChild(link);

  window.open(link, '_blank');
}



quoteButton.addEventListener("click", divQuote);
