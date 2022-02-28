var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var last = Paper.image('last.png', 0, 0, 160, 160).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});

Paper.text(35, 150, '이번 주 학습을 마칩니다!').attr({
    'fill': 'black',
    'font-size': 30
});
last.use().transform('t90, 220').appendTo(Paper);

var orangeB = Paper.rect(130, 430, 120, 30).attr({
    'fill': '#fe9b00',
    'rx': 8,
    'ry': 8
});
var orangeBT = Paper.text(167, 450, '처음으로').click(handler01).attr({
    'fill': 'white',
    'font-size': 14
});
var orange = Paper.g(orangeB, orangeBT).attr({
    'cursor': 'pointer'
});

function handler01() {
    location.replace('CAR002.html');
}
