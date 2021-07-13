// data

const SEGYO = 'segyo';
const WON = 'won';

const segyoArray = [
  ['107', '197', '224', '220'],
  ['206', '207', '209', '221'],
  ['210', '211', '213', '222'],
  ['214', '215', '217', '218'],
  ['200', '201', '203', '223'],
];

const wonArray = [
  ['297', '026', '027', '028'],
  ['299', '301', '302', '303'],
  ['310', '311', '312', '317'],
  ['304', '010', '305', '306'],
  ['307', '308', '316', '309'],
];

const loginTimeArray = ['11시 25분 00초', '17시 25분 00초'];
const resvTimeArray = ['11시 29분 59초', '17시 29분 59초'];

const timerURL = 'https://time.navyism.com/?host=www.osansports.or.kr';
const loginURL =
  'https://www.osansports.or.kr/fmcs/45?referer=https%3A%2F%2Fwww.osansports.or.kr%2Ffmcs%2F1';

// running code

console.log('js injected');

let centerArray = [SEGYO];
let targetClassArray = [1, 2];
let resvURLArray = [];

const getTargetDay = () => {
  let today = new Date();
  let day = today.getDay();

  let targetDay = 1;

  switch (day) {
    case 5:
      targetDay = 1;
      break;
    case 6:
      targetDay = 1;
      break;
    default:
      targetDay = day + 1;
      break;
  }

  return targetDay;
};

const getClassURL = (center, targetDay, targetClass) => {
  let finalURL;

  const urlSuffix = '&type=R';
  const segyoBaseURL =
    'https://www.osansports.or.kr/fmcs/29?center=OSANSISUL01&action=read&page=1&event=1000000000&class=1000060000&comcd=OSANSISUL01&classcd=00';
  const wonBaseURL =
    'https://www.osansports.or.kr/fmcs/29?center=OSANSISUL02&action=read&page=1&event=1040000000&class=1040010000&comcd=OSANSISUL02&classcd=00';

  switch (center) {
    case SEGYO:
      finalURL =
        segyoBaseURL + `${segyoArray[targetDay][targetClass]}` + urlSuffix;
      break;
    case WON:
      finalURL = wonBaseURL + `${wonArray[targetDay][targetClass]}` + urlSuffix;
      break;
  }

  return finalURL;
};

const logIn = () => {
  console.log('login');
  document.getElementById('user_id').value = 'rarira';
  document.getElementById('user_password').value = 'secu1968';
  document.getElementsByClassName('submit')[0].children[0].click();
};

const addCenter = (newCenter) => {
  if (newCenter === WON) {
    centerArray.push(newCenter);
  } else {
    console.log(centerArray, 'must be WON or other');
  }
};

const setTargetClassArray = (array) => {
  targetClassArray = array;
  console.log(targetClassArray);
};

const openResvWindows = () => {
  resvURLArray.forEach((url) => {
    window.open(url, '_blank');
  });
};

const makeResv = () => {
  document.getElementsByClassName('button action_write')[0].click();
};

let loginTime;
let resvTime;
let resvURL;

const queryString = window.location.search;
let searchParams = new URLSearchParams(queryString);

//
if (searchParams.has('ready')) {
  console.log('has loggedIn');
  const targetDay = getTargetDay();

  centerArray.forEach((center) => {
    targetClassArray.forEach((classNo) => {
      const url = getClassURL(center, targetDay, classNo);
      resvURLArray.push(url);
    });
  });
}

// 로그인 후에 다시 타이머로 이동
if (location.href === 'https://www.osansports.or.kr/fmcs/1?prev_proc=login') {
  location.href = `${timerURL}&ready=true`;
}

// 로그인 처리
else if (document.getElementById('user_id') !== null) {
  logIn();
}

// 타이머 처리
else if (document.getElementById('time_area') !== null) {
  console.log('timer');

  let nowTime = document.getElementById('time_area').innerText.slice(-11);

  if (nowTime > '12시 00분 00초') {
    loginTime = loginTimeArray[1];
    resvTime = resvTimeArray[1];
  } else {
    loginTime = loginTimeArray[0];
    resvTime = resvTimeArray[0];
  }

  let loginTimer = window.setInterval(function () {
    if (document.getElementById('time_area').innerText.includes(loginTime)) {
      clearInterval(loginTimer);

      location.href = loginURL;
    }
  }, 1000);

  let resvTimer = window.setInterval(function () {
    if (document.getElementById('time_area').innerText.includes(resvTime)) {
      clearInterval(resvTimer);
      if (resvURLArray.length > 0) {
        openResvWindows();
      } else {
        console.error('No ResvURLs Set');
      }
    }
  }, 300);

  console.log('login timer activated: ', loginTime);
  console.log('reservation timer activated: ', resvTime);
  console.log('centers:', centerArray, 'to change call "addCenter(newCenter)"');
  console.log(
    'times:',
    targetClassArray,
    'to change call "setTargetClassArray(newArry)"'
  );
  console.log('resvURLs: ', resvURLArray);
}

// 수강신청 처리
else if (
  document.getElementsByTagName('legend').length > 0 &&
  document.getElementsByTagName('legend')[0].innerHTML === '수강 신청'
) {
  if (
    document.getElementsByClassName('txtcenter')[1].children[0].children[1]
      .innerText !== '신청가능'
  ) {
    location.reload();
  } else {
    makeResv;
  }
}

// 성공
else if (
  document.getElementsByClassName('result_box').length > 0 &&
  document.getElementsByClassName('result_box')[0].children[0].innerText ===
    '수강신청 접수 완료'
) {
  window.close();
}
