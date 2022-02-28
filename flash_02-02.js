// 가등급 3~4세트 깜빡이카드(2)
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

// 상단
var hanjaArea = Paper.g();
var t1 = hanjaArea.text(180, 300, '5').attr({
  'font-size': 130,
  'text-anchor': 'middle'
});

var t2;
setTimeout(function() {
  t1.remove();
  t2 = hanjaArea.text(180, 300, '4').attr({
    'font-size': 130,
    'text-anchor': 'middle'
  });
}, 1000);

var t3;
setTimeout(function() {
  t2.remove();
  t3 = hanjaArea.text(180, 300, '3').attr({
    'font-size': 130,
    'text-anchor': 'middle'
  });
}, 2000);

var t4;
setTimeout(function() {
  t3.remove();
  t4 = hanjaArea.text(180, 300, '2').attr({
    'font-size': 130,
    'text-anchor': 'middle'
  });
}, 3000);

var t5;
setTimeout(function() {
  t4.remove();
  t5 = hanjaArea.text(180, 300, '1').attr({
    'font-size': 130,
    'text-anchor': 'middle'
  });
}, 4000);

setTimeout(function() {
  location.replace('flash_02-03.html');
}, 5000);
