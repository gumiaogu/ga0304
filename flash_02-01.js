// 가등급 3~4세트 깜빡이카드(1)
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('home.png', 0, 0, 30, 30).toDefs();
var hoi01 = Paper.image('hoi01.png', 0, 0, 160, 160).toDefs();

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

function handler01() {
  location.replace('flash_02-01.html');
}

// 상단
var hanjaArea = Paper.g();

hanjaArea.text(180, 180, '한자를 보고').attr({
  'font-size': 40,
  'text-anchor': 'middle'
});
hanjaArea.text(180, 260, '뜻음을 말해 보세요.').attr({
  'font-size': 40,
  'text-anchor': 'middle'
});
hoi01.use().transform('t100, 320').appendTo(hanjaArea);


setTimeout(function() {
  location.replace('flash_02-02.html');
}, 4000);
