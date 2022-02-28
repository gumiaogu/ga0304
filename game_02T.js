// Game1
var HT002 = {
  paper: Paper.g(),
  pairInfo: [],
  condition: {
    grade: '가',
    setRange: [3, 4]
  },
  configure: function() {
    var self = HT002;

    self.pairInfo = Library.generatePairGame({
      condition: self.condition
    });

  },

  makeQuestion: function() {
    var self = HT002;
    var questionInfo = self.pairInfo;

    // 문제 그리기
    var questions = Library.drawPairGame({
      paper: self.paper,
      questionInfo: questionInfo
    });

    Library.checkPairGame({
      questions: questions,
      callback: self.report
    });
  },

  report: function(userTime) {
    var self = HT002;
    self.paper.clear();

    setTimeout(function() {
      var code03 = new Audio('aud/code03.wav');
      code03.play();
    }, 400);

    var reportG = self.paper.g();
    var record = (userTime / 1000).toFixed(1);
    Paper.text(180, 170, record + '초').attr({
      'fill': 'orange',
      'font-size': 40,
      'font-wieght': 'bold',
      'text-anchor': 'middle'
    });
    reportG.image('hoi03.png', 100, 220, 140, 140);
    var redB = reportG.rect(36, 410, 120, 30).attr({
      'fill': '#f8371f',
      'rx': 8,
      'ry': 8
    });
    var redBT = reportG.text(78, 430, '재도전').attr({
      'fill': 'white',
      'font-size': 13
    });
    var red = reportG.g(redB, redBT).click(handler01).attr({
      'cursor': 'pointer'
    });
    var orangeB = reportG.rect(200, 410, 120, 30).attr({
      'fill': '#fe9b00',
      'rx': 8,
      'ry': 8
    });
    var orangeBT = reportG.text(245, 430, '끝내기').attr({
      'fill': 'white',
      'font-size': 13
    });
    var orange = reportG.g(orangeB, orangeBT).click(handler02).attr({
      'cursor': 'pointer'
    });

    function handler01() {
      location.reload();
    }

    function handler02() {
      location.replace('last_02.html');
    }
  },

  start: function() {
    var self = HT002;
    self.configure();
    self.makeQuestion();
  }
};

HT002.start();
