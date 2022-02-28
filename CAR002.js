//가등급 3~4세트 홈화면(카드)
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('home.png', 0, 0, 30, 30).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
    'fill': '#f3b44d',
    'opacity' : '0.4'
});

home.use().transform('t12, 6').appendTo(topBox).click(handlerHome).attr({
    'cursor' : 'pointer'
});
function handlerHome() {
  location.replace('CAR002.html');
}

topBox.text(280, 27, '가 활용02').attr({
  'font-size': 18
});

// 한자 미니카드
var cardArea = Paper.g();

cardArea.rect(8, 50, 345, 270).attr({
    'fill': '#afdc55',
    'opacity': 0.2
});
cardArea.text(43, 130, '가03').attr({
    'font-family': 'Sans-Serif',
    'font-size': 25,
    'fill': '#3f9752',
    'font-weight': 'bold'
});

cardArea.rect(8, 330, 345, 270).attr({
    'fill': '#afdc55',
    'opacity': 0.2
});
cardArea.text(43, 410, '가04').attr({
    'font-family': 'Sans-Serif',
    'font-size': 25,
    'fill': '#3f9752',
    'font-weight': 'bold'
});

cardArea.rect(130, 60, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(180, 120, data[10].hanja).click(playAud01).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(180, 160, data[10].mean).click(playAud01).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(240, 60, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(290, 120, data[11].hanja).click(playAud02).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(290, 160, data[11].mean).click(playAud02).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(20, 190, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(70, 250, data[12].hanja).click(playAud03).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(70, 290, data[12].mean).click(playAud03).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(130, 190, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(180, 250, data[13].hanja).click(playAud04).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(180, 290, data[13].mean).click(playAud04).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(240, 190, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(290, 250, data[14].hanja).click(playAud05).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(290, 290, data[14].mean).click(playAud05).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(130, 340, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(180, 400, data[15].hanja).click(playAud06).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(180, 440, data[15].mean).click(playAud06).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(240, 340, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(290, 400, data[16].hanja).click(playAud07).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(290, 440, data[16].mean).click(playAud07).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(20, 470, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(70, 530, data[17].hanja).click(playAud08).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(70, 570, data[17].mean).click(playAud08).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(130, 470, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(180, 530, data[18].hanja).click(playAud09).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(180, 570, data[18].mean).click(playAud09).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

cardArea.rect(240, 470, 100, 120, 3, 3).attr({
    'fill': 'white',
    'stroke': 'gray'
});
cardArea.text(290, 530, data[19].hanja).click(playAud10).attr({
    'font-size': 50,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});
cardArea.text(290, 570, data[19].mean).click(playAud10).attr({
    'font-size': 20,
    'text-anchor': 'middle',
    'cursor': 'pointer'
});

//핸들러 함수
function playAud01() {
  var audio1 = new Audio('aud/aud_11.wav');
  audio1.play();
}

function playAud02() {
  var audio2 = new Audio('aud/aud_12.wav');
  audio2.play();
}

function playAud03() {
  var audio3 = new Audio('aud/aud_13.wav');
  audio3.play();
}

function playAud04() {
  var audio4 = new Audio('aud/aud_14.wav');
  audio4.play();
}

function playAud05() {
  var audio5 = new Audio('aud/aud_15.wav');
  audio5.play();
}

function playAud06() {
  var audio6 = new Audio('aud/aud_16.wav');
  audio6.play();
}

function playAud07() {
  var audio7 = new Audio('aud/aud_17.wav');
  audio7.play();
}

function playAud08() {
  var audio8 = new Audio('aud/aud_18.wav');
  audio8.play();
}

function playAud09() {
  var audio9 = new Audio('aud/aud_19.wav');
  audio9.play();
}

function playAud10() {
  var audio10 = new Audio('aud/aud_20.wav');
  audio10.play();
}

// 하단 버튼
var buttonArea = Paper.g();

var redB = buttonArea.rect(150, 608, 90, 25).attr({
  'fill': '#E9967A',
  'opacity' : 0.8,
  'rx': 8,
  'ry': 8
});
var redBT = buttonArea.text(163, 626, '깜빡이 카드').attr({
  'fill': 'black',
  'font-size': 15
});
var red = buttonArea.g(redB, redBT).click(handler01).attr({
  'cursor': 'pointer'
});

var orangeB = buttonArea.rect(260, 608, 90, 25).attr({
  'fill': '#DAA520',
  'opacity' : 0.8,
  'rx': 8,
  'ry': 8
});
var orangeBT = buttonArea.text(276, 626, '게임 도전!').attr({
  'fill': 'black',
  'font-size': 15
});
var orange = buttonArea.g(orangeB, orangeBT).click(handler02).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('flash_02-01.html');
}
function handler02() {
  location.replace('game_02.html');
}
