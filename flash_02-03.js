//가등급 3~4세트 깜빡이카드(3)
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('home.png', 0, 0, 30, 30).toDefs();

var hoi02 = Paper.image('hoi02.png', 0, 0, 160, 160).toDefs();

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
    location.reload();
}

// 한자 카드 카운팅
var progress = Paper.g();
var p0 = progress.text(170, 100, '/ 10').attr({
    'fill': 'gray',
    'font-size': 25
});
var p1 = progress.text(150, 100, '1').attr({
    'fill': 'none',
    'font-size': 25
});
var p2 = progress.text(150, 100, '2').attr({
    'fill': 'none',
    'font-size': 25
});
var p3 = progress.text(150, 100, '3').attr({
    'fill': 'none',
    'font-size': 25
});
var p4 = progress.text(150, 100, '4').attr({
    'fill': 'none',
    'font-size': 25
});
var p5 = progress.text(150, 100, '5').attr({
    'fill': 'none',
    'font-size': 25
});
var p6 = progress.text(150, 100, '6').attr({
    'fill': 'none',
    'font-size': 25
});
var p7 = progress.text(150, 100, '7').attr({
    'fill': 'none',
    'font-size': 25
});
var p8 = progress.text(150, 100, '8').attr({
    'fill': 'none',
    'font-size': 25
});
var p9 = progress.text(150, 100, '9').attr({
    'fill': 'none',
    'font-size': 25
});
var p10 = progress.text(140, 100, '10').attr({
    'fill': 'none',
    'font-size': 25
});
setTimeout(function() {
    p1.attr({
        'fill': 'gray'
    });
}, 10);
setTimeout(function() {
    p1.attr({
        'fill': 'none'
    });
}, 3900);

setTimeout(function() {
    p2.attr({
        'fill': 'gray'
    });
}, 4000);
setTimeout(function() {
    p2.attr({
        'fill': 'none'
    });
}, 7900);

setTimeout(function() {
    p3.attr({
        'fill': 'gray'
    });
}, 8000);
setTimeout(function() {
    p3.attr({
        'fill': 'none'
    });
}, 11900);

setTimeout(function() {
    p4.attr({
        'fill': 'gray'
    });
}, 12000);
setTimeout(function() {
    p4.attr({
        'fill': 'none'
    });
}, 15900);

setTimeout(function() {
    p5.attr({
        'fill': 'gray'
    });
}, 16000);
setTimeout(function() {
    p5.attr({
        'fill': 'none'
    });

}, 19900);

setTimeout(function() {
    p6.attr({
        'fill': 'gray'
    });
}, 20000);
setTimeout(function() {
    p6.attr({
        'fill': 'none'
    });
}, 23900);

setTimeout(function() {
    p7.attr({
        'fill': 'gray'
    });
}, 24000);
setTimeout(function() {
    p7.attr({
        'fill': 'none'
    });
}, 27900);

setTimeout(function() {
    p8.attr({
        'fill': 'gray'
    });
}, 28000);
setTimeout(function() {
    p8.attr({
        'fill': 'none'
    });
}, 31900);

setTimeout(function() {
    p9.attr({
        'fill': 'gray'
    });
}, 32000);
setTimeout(function() {
    p9.attr({
        'fill': 'none'
    });
}, 35900);

setTimeout(function() {
    p10.attr({
        'fill': 'gray'
    });
}, 36000);
setTimeout(function() {
    p10.attr({
        'fill': 'none'
    });
    p0.attr({
        'fill': 'none'
    });
}, 39800);

// 한자 깜빡이 카드
var blinkArea = Paper.g();

var t1 = blinkArea.text(180, 330, '山').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt1 = blinkArea.text(180, 500, '메 산').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t2 = blinkArea.text(180, 330, '雨').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt2 = blinkArea.text(180, 500, '비 우').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t3 = blinkArea.text(180, 330, '田').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt3 = blinkArea.text(180, 500, '밭 전').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t4 = blinkArea.text(180, 330, '石').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt4 = blinkArea.text(180, 500, '돌 석').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t5 = blinkArea.text(180, 330, '中').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt5 = blinkArea.text(180, 500, '가운데 중').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t6 = blinkArea.text(180, 330, '犬').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt6 = blinkArea.text(180, 500, '개 견').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t7 = blinkArea.text(180, 330, '魚').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt7 = blinkArea.text(180, 500, '고기 어').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t8 = blinkArea.text(180, 330, '馬').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt8 = blinkArea.text(180, 500, '말 마').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t9 = blinkArea.text(180, 330, '豕').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt9 = blinkArea.text(180, 500, '돼지 시').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

var t10 = blinkArea.text(180, 330, '鳥').attr({
    'fill': 'none',
    'font-size': 200,
    'text-anchor': 'middle'
});
var tt10 = blinkArea.text(180, 500, '새 조').attr({
    'fill': 'none',
    'font-size': 70,
    'text-anchor': 'middle'
});

setTimeout(function() {
    t1.attr({
        'fill': 'black'
    });
}, 10);
setTimeout(function() {
    t1.attr({
        'fill': 'none'
    });
}, 1000);
setTimeout(function() {
    t1.attr({
        'fill': 'black'
    });
    tt1.attr({
        'fill': 'black'
    });
}, 2000);
setTimeout(function() {
    t1.attr({
        'fill': 'none'
    });
    tt1.attr({
        'fill': 'none'
    });
}, 3000);

setTimeout(function() {
    t2.attr({
        'fill': 'black'
    });
}, 4000);
setTimeout(function() {
    t2.attr({
        'fill': 'none'
    });
}, 5000);
setTimeout(function() {
    t2.attr({
        'fill': 'black'
    });
    tt2.attr({
        'fill': 'black'
    });
}, 6000);
setTimeout(function() {
    t2.attr({
        'fill': 'none'
    });
    tt2.attr({
        'fill': 'none'
    });
}, 7000);

setTimeout(function() {
    t3.attr({
        'fill': 'black'
    });
}, 8000);
setTimeout(function() {
    t3.attr({
        'fill': 'none'
    });
}, 9000);
setTimeout(function() {
    t3.attr({
        'fill': 'black'
    });
    tt3.attr({
        'fill': 'black'
    });
}, 10000);
setTimeout(function() {
    t3.attr({
        'fill': 'none'
    });
    tt3.attr({
        'fill': 'none'
    });
}, 11000);

setTimeout(function() {
    t4.attr({
        'fill': 'black'
    });
}, 12000);
setTimeout(function() {
    t4.attr({
        'fill': 'none'
    });
}, 13000);
setTimeout(function() {
    t4.attr({
        'fill': 'black'
    });
    tt4.attr({
        'fill': 'black'
    });
}, 14000);
setTimeout(function() {
    t4.attr({
        'fill': 'none'
    });
    tt4.attr({
        'fill': 'none'
    });
}, 15000);

setTimeout(function() {
    t5.attr({
        'fill': 'black'
    });
}, 16000);
setTimeout(function() {
    t5.attr({
        'fill': 'none'
    });
}, 17000);
setTimeout(function() {
    t5.attr({
        'fill': 'black'
    });
    tt5.attr({
        'fill': 'black'
    });
}, 18000);
setTimeout(function() {
    t5.attr({
        'fill': 'none'
    });
    tt5.attr({
        'fill': 'none'
    });
}, 19000);

setTimeout(function() {
    t6.attr({
        'fill': 'black'
    });
}, 20000);
setTimeout(function() {
    t6.attr({
        'fill': 'none'
    });
}, 21000);
setTimeout(function() {
    t6.attr({
        'fill': 'black'
    });
    tt6.attr({
        'fill': 'black'
    });
}, 22000);
setTimeout(function() {
    t6.attr({
        'fill': 'none'
    });
    tt6.attr({
        'fill': 'none'
    });
}, 23000);

setTimeout(function() {
    t7.attr({
        'fill': 'black'
    });
}, 24000);
setTimeout(function() {
    t7.attr({
        'fill': 'none'
    });
}, 25000);
setTimeout(function() {
    t7.attr({
        'fill': 'black'
    });
    tt7.attr({
        'fill': 'black'
    });
}, 26000);
setTimeout(function() {
    t7.attr({
        'fill': 'none'
    });
    tt7.attr({
        'fill': 'none'
    });
}, 27000);

setTimeout(function() {
    t8.attr({
        'fill': 'black'
    });
}, 28000);
setTimeout(function() {
    t8.attr({
        'fill': 'none'
    });
}, 29000);
setTimeout(function() {
    t8.attr({
        'fill': 'black'
    });
    tt8.attr({
        'fill': 'black'
    });
}, 30000);
setTimeout(function() {
    t8.attr({
        'fill': 'none'
    });
    tt8.attr({
        'fill': 'none'
    });
}, 31000);

setTimeout(function() {
    t9.attr({
        'fill': 'black'
    });
}, 32000);
setTimeout(function() {
    t9.attr({
        'fill': 'none'
    });
}, 33000);
setTimeout(function() {
    t9.attr({
        'fill': 'black'
    });
    tt9.attr({
        'fill': 'black'
    });
}, 34000);
setTimeout(function() {
    t9.attr({
        'fill': 'none'
    });
    tt9.attr({
        'fill': 'none'
    });
}, 35000);

setTimeout(function() {
    t10.attr({
        'fill': 'black'
    });
}, 36000);
setTimeout(function() {
    t10.attr({
        'fill': 'none'
    });
}, 37000);
setTimeout(function() {
    t10.attr({
        'fill': 'black'
    });
    tt10.attr({
        'fill': 'black'
    });
}, 38000);
setTimeout(function() {
    t10.attr({
        'fill': 'none'
    });
    tt10.attr({
        'fill': 'none'
    });
}, 38500);

setTimeout(function() {
    hoi02.use().transform('t120, 170').appendTo(Paper);
    var redB = Paper.rect(36, 410, 120, 30).attr({
        'fill': '#f8371f',
        'rx': 8,
        'ry': 8
    });
    var redBT = Paper.text(75, 430, '처음으로').click(handler01).attr({
        'fill': 'white',
        'font-size': 13
    });
    var red = Paper.g(redB, redBT).attr({
        'cursor': 'pointer'
    });
    var orangeB = Paper.rect(200, 410, 120, 30).attr({
        'fill': '#fe9b00',
        'rx': 8,
        'ry': 8
    });
    var orangeBT = Paper.text(250, 430, '게임').click(handler02).attr({
        'fill': 'white',
        'font-size': 13
    });
    var orange = Paper.g(orangeB, orangeBT).attr({
        'cursor': 'pointer'
    });

    function handler01() {
        location.replace('CAR002.html');
    }

    function handler02() {
        location.replace('game_02.html');
    }
}, 40500);
