// window.addEventListener('load', function () {
console.log('js injected');
// let realpersonclasscollection = document.getElementsByClassName(
//   'realperson-text'
// );

// let timeSlot = 'select_1';
const loginTimeArray = ['11시 28분 00초', '17시 28분 00초'];
const resvTimeArray = ['11시 29분 58초', '17시 29분 58초'];
const resvUrlArray = [
  'https://www.osansports.or.kr/yeyak/lecture/detail/index/OSANSISUL01/2001/00210/I000044',
  'https://www.osansports.or.kr/yeyak/lecture/detail/index/OSANSISUL03/2001/00480/I000209',
];
const timerURL = 'https://time.navyism.com/?host=www.osansports.or.kr';
var loginTime;
var resvTime;
var resvURL;

if (document.getElementsByClassName('error').length !== 0) {
  console.log('error screen');
  if (document.getElementsByClassName('error')[0].innerText !== '') {
    document.getElementById('btn_prev').click();
    // location.href = resvURL;
  }
} else if (
  document.getElementsByClassName('lecture_status_img').length > 0 &&
  document.getElementsByClassName('lecture_status_img')[0].alt &&
  document.getElementsByClassName('lecture_status_img')[0].alt.includes('가능')
) {
  console.log('apply!');

  const inputArray = document.getElementsByTagName('input');

  if (inputArray[inputArray.length - 1].alt === '수강신청') {
    inputArray[inputArray.length - 1].click();
  } else {
    for (let num = 0; num++; inputArray.length - 1) {
      if (inputArray[num].alt === '수강신청') {
        inputArray[num].click();
      }
    }
  }
} else if (document.getElementById('input_memid') !== null) {
  console.log('login');
  document.getElementById('input_memid').value = 'rarira';
  document.getElementById('input_mempw').value = 'secu1968';
  document.getElementsByTagName('input')[3].click();
} else if (location.href === 'https://www.osansports.or.kr/yeyak/') {
  location.href = timerURL;
} else if (document.getElementById('time_area') !== null) {
  console.log('timer');

  let nowTime = document.getElementById('time_area').innerText.slice(-11);

  if (nowTime > '12시 00분 00초') {
    loginTime = loginTimeArray[1];
    resvTime = resvTimeArray[1];
    resvURL = resvUrlArray[1];
  } else {
    loginTime = loginTimeArray[0];
    resvTime = resvTimeArray[0];
    resvURL = resvUrlArray[0];
  }

  var loginTimer = window.setInterval(function () {
    if (document.getElementById('time_area').innerText.includes(loginTime)) {
      clearInterval(loginTimer);

      location.href = 'https://www.osansports.or.kr/yeyak/member/login';
    }
  }, 1000);

  var resvTimer = window.setInterval(function () {
    if (document.getElementById('time_area').innerText.includes(resvTime)) {
      clearInterval(resvTimer);
      location.href = resvURL;
    }
  }, 300);

  console.log('login timer activated: ', loginTime);
  console.log('reservation timer activated: ', resvTime);
  console.log('resvURL: ', resvURL);
}
