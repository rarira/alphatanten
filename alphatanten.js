// window.addEventListener('load', function () {
console.log('js injected');
let realpersonclasscollection = document.getElementsByClassName(
  'realperson-text'
);

let timeSlot = 'select_1';
var loginTime = '06시 58분 00초';
var resvTime = '06시 59분 59초';

// get URL
var today = new Date();
var dd = today.getDate();
today.setDate(dd + 3);
var dr = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

if (dd < 10) {
  dd = '0' + dd;
}

if (dr < 10) {
  dr = '0' + dr;
}
if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd;
resvday = mm + '/' + dr;

var resvURL = `http://sports.isdc.co.kr/rent/reservation/index/2018/${resvday}/1/SIMC01/07/26`;
// var resvURL = 'http://sports.isdc.co.kr/rent/reservation/index/2018/07/09/1/SIMC01/07/26';

if (document.getElementsByClassName('error').length !== 0) {
  console.log('error screen');
  if (
    document.getElementsByClassName('error')[0].innerHTML ==
    '예약이 가능한 일자가 아닙니다.'
  ) {
    location.href = resvURL;
  }
} else if (realpersonclasscollection.length !== 0) {
  console.log('real person hack');

  var disablerFunction = function() {
    window.alert = function alert(msg) {
      console.log('Hidden Alert ' + msg);
    };
    window.confirm = function confirm(msg) {
      console.log('Hidden Confirm ' + msg);
      return true; /*simulates user clicking yes*/
    };
  };

  var disablerCode = '(' + disablerFunction.toString() + ')();';

  var disablerScriptElement = document.createElement('script');
  disablerScriptElement.textContent = disablerCode;

  document.documentElement.appendChild(disablerScriptElement);
  disablerScriptElement.parentNode.removeChild(disablerScriptElement);

  let lettera = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', '*', ' ', ' '],
    [' ', ' ', '*', ' ', '*', ' ', ' '],
    [' ', '*', ' ', ' ', ' ', '*', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
  ];
  let letterb = [
    ['*', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', ' '],
  ];
  let letterc = [
    [' ', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', '*', '*', '*', '*', ' '],
  ];
  let letterd = [
    ['*', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', ' '],
  ];
  let lettere = [
    ['*', '*', '*', '*', '*', '*', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', '*', '*', '*', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', '*', '*', '*', '*', '*', '*'],
  ];
  let letterf = [
    ['*', '*', '*', '*', '*', '*', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', '*', '*', '*', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
  ];
  let letterg = [
    [' ', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', '*', '*', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', '*', '*', '*', '*', ' '],
  ];
  let letterh = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
  ];
  let letteri = [
    ['*', '*', '*', '*', '*', '*', '*'],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', '*', '*', '*', '*', '*'],
  ];
  let letterj = [
    [' ', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', '*', '*', '*', '*', ' '],
  ];
  let letterk = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', '*', '*', ' '],
    ['*', ' ', '*', '*', ' ', ' ', ' '],
    ['*', '*', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', '*', '*', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
  ];
  let letterl = [
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', '*', '*', '*', '*', '*', '*'],
  ];
  let letterm = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', ' ', ' ', ' ', '*', '*'],
    ['*', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', ' ', '*', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
  ];
  let lettern = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', '*', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', '*', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', '*', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
  ];
  let lettero = [
    [' ', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', '*', '*', '*', '*', ' '],
  ];
  let letterp = [
    ['*', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
  ];
  let letterq = [
    [' ', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', '*', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', '*', ' '],
    [' ', '*', '*', '*', '*', ' ', '*'],
  ];
  let letterr = [
    ['*', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', '*', ' ', ' '],
    ['*', ' ', ' ', ' ', ' ', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
  ];
  let letters = [
    [' ', '*', '*', '*', '*', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', '*', '*', '*', '*', ' '],
  ];
  let lettert = [
    ['*', '*', '*', '*', '*', '*', '*'],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ];
  let letteru = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', '*', '*', '*', '*', ' '],
  ];
  let letterv = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', ' ', ' ', ' ', '*', ' '],
    [' ', '*', ' ', ' ', ' ', '*', ' '],
    [' ', ' ', '*', ' ', '*', ' ', ' '],
    [' ', ' ', '*', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ];
  let letterw = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', ' ', ' ', '*', ' ', ' ', '*'],
    ['*', ' ', '*', ' ', '*', ' ', '*'],
    ['*', '*', ' ', ' ', ' ', '*', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
  ];
  let letterx = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', ' ', ' ', ' ', '*', ' '],
    [' ', ' ', '*', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', '*', ' ', ' '],
    [' ', '*', ' ', ' ', ' ', '*', ' '],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
  ];
  let lettery = [
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', ' ', ' ', ' ', '*', ' '],
    [' ', ' ', '*', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ];
  let letterz = [
    ['*', '*', '*', '*', '*', '*', '*'],
    [' ', ' ', ' ', ' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' ', ' ', ' '],
    [' ', '*', ' ', ' ', ' ', ' ', ' '],
    ['*', '*', '*', '*', '*', '*', '*'],
  ];

  let charset = [
    lettera,
    letterb,
    letterc,
    letterd,
    lettere,
    letterf,
    letterg,
    letterh,
    letteri,
    letterj,
    letterk,
    letterl,
    letterm,
    lettern,
    lettero,
    letterp,
    letterq,
    letterr,
    letters,
    lettert,
    letteru,
    letterv,
    letterw,
    letterx,
    lettery,
    letterz,
  ];

  let fulltext = realpersonclasscollection[0].innerHTML.replace(/&nbsp;/g, ' ');

  let lines = fulltext.split('<br>');

  let character1 = [];
  for (i = 0; i < 7; i++) {
    character1[i] = [];
    let line = lines[i];
    for (j = 0; j < 7; j++) {
      character1[i][j] = line[j];
    }
  }

  let character2 = [];
  for (i = 0; i < 7; i++) {
    character2[i] = [];
    let line = lines[i];
    for (j = 9; j < 16; j++) {
      character2[i][j - 9] = line[j];
    }
  }

  let character3 = [];
  for (i = 0; i < 7; i++) {
    character3[i] = [];
    let line = lines[i];
    for (j = 18; j < 25; j++) {
      character3[i][j - 18] = line[j];
    }
  }

  let character4 = [];
  for (i = 0; i < 7; i++) {
    character4[i] = [];
    let line = lines[i];
    for (j = 27; j < 34; j++) {
      character4[i][j - 27] = line[j];
    }
  }

  let character5 = [];
  for (i = 0; i < 7; i++) {
    character5[i] = [];
    let line = lines[i];
    for (j = 36; j < 43; j++) {
      character5[i][j - 36] = line[j];
    }
  }

  let character6 = [];
  for (i = 0; i < 7; i++) {
    character6[i] = [];
    let line = lines[i];
    for (j = 45; j < 52; j++) {
      character6[i][j - 45] = line[j];
    }
  }

  let character7 = [];
  for (i = 0; i < 7; i++) {
    character7[i] = [];
    let line = lines[i];
    for (j = 54; j < 61; j++) {
      character7[i][j - 54] = line[j];
    }
  }

  let parsedchararray = [
    character1,
    character2,
    character3,
    character4,
    character5,
    character6,
    character7,
  ];
  let fullparsedtext = [];

  for (i = 0; i < 7; i++) {
    for (j = 0; j < charset.length; j++) {
      if (JSON.stringify(parsedchararray[i]) == JSON.stringify(charset[j])) {
        fullparsedtext[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')[j];
      }
    }
  }

  document.getElementById(timeSlot).checked = true;

  let inputWindow = document.getElementById('defaultReal');
  inputWindow.value = fullparsedtext.join('');
  document.getElementById('btn_realperson').click();

  setTimeout(function() {
    document.getElementById('btn_reservation').click();
  }, 1000);
} else if (document.getElementById('appli_name') !== null) {
  console.log('agree_1!');
  document.getElementById('agree_1').checked = true;
  document.getElementById('btn_reservation').click();
} else if (document.getElementById('input_memid') !== null) {
  console.log('login');
  document.getElementById('input_memid').value = 'mazda';
  document.getElementById('input_mempw').value = 'asd1848';
  document.getElementsByTagName('input')[8].click();
  setTimeout(function() {
    location.href = 'http://time.navyism.com/?host=sports.isdc.co.kr';
  }, 100);
} else if (document.getElementsByClassName('message').length !== 0) {
  console.log('error screen');
  if (
    document.getElementsByTagName('p')[0].innerHTML ==
    '신청시간 필드가 필요합니다.'
  ) {
    location.href = 'https://www.google.co.kr/search?q=%EC%A2%86%EB%90%90&';
  }
} else {
  console.log('timer');

  var loginTimer = window.setInterval(function() {
    if (document.getElementById('time_area').innerHTML.includes(loginTime)) {
      clearInterval(loginTimer);
      location.href = 'http://sports.isdc.co.kr/member/login';
    }
  }, 1000);

  var resvTimer = window.setInterval(function() {
    if (document.getElementById('time_area').innerHTML.includes(resvTime)) {
      clearInterval(resvTimer);
      location.href = resvURL;
    }
  }, 300);

  console.log('login timer activated: ', loginTime);
  console.log('reservation timer activated: ', resvTime);
  console.log('resvURL: ', resvURL);
}
