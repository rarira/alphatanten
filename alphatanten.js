console.log('js injected');

const loginTimeArray = ['11시 25분 00초', '17시 25분 00초'];
const getURLTimeArray = ['11시 25분 30초', '17시 25분 30초'];
const resvTimeArray = ['11시 29분 59초', '17시 29분 59초'];

// var today = new Date();
// var dd = today.getDate() + 1;
// var mm = today.getMonth() + 1; //January is 0!

// const day = `${mm}월 ${dd}일`;

const listURLArray = [
  'https://www.osansports.or.kr/yeyak/lecture/llist/index/OSANSISUL01/2001/L/1000060001/0/0/0/0/0/0/0/1/-/-/1/1',
  'https://www.osansports.or.kr/yeyak/lecture/llist/index/OSANSISUL03/2001/L/112003/0/0/0/0/0/0/0/1/-/-/1/1',
];

// const resvUrlArray = [
//   'https://www.osansports.or.kr/yeyak/lecture/detail/index/OSANSISUL01/2001/00210/I000044',
//   'https://www.osansports.or.kr/yeyak/lecture/detail/index/OSANSISUL03/2001/00478/I000219',
// ];
const timerURL = 'https://time.navyism.com/?host=www.osansports.or.kr';
var loginTime;
var getURLTime;
var resvTime;
var listURL;
var resvURL;
var titleArray;
var linkArray;
var linkIndex;
var title = '3부강좌상세보기';

const queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);

if (searchParams.has('resvURL')) {
  console.log('has resvURL param');
  resvURL = searchParams.get('resvURL');
}

function getLinksByTitle(
  // day,
  title
) {
  var allLinks = document.getElementsByTagName('a');
  var links = [];
  for (var i = 0, len = allLinks.length; i < len; ++i) {
    if (
      !!allLinks[i].title &&
      // allLinks[i].title.startsWith(day) &&
      allLinks[i].title.endsWith(title) &&
      allLinks[i].innerText.includes('성인')
    ) {
      links.push(allLinks[i]);
    }
  }

  console.log(links);

  return links;
}

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
  console.log('apply!', linkIndex);

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
  document.getElementsByTagName('input')[5].click();
} else if (location.href === 'https://www.osansports.or.kr/yeyak/') {
  location.href = timerURL;
} else if (
  location.href === listURLArray[0] ||
  location.href === listURLArray[1]
) {
  if (location.href === listURLArray[1]) {
    title = '19:00~21:00강좌상세보기';
    const link = getLinksByTitle(
      // '<남자>일일수영',
      title
    )[0];
    console.log(title, link);
    if (!!link) {
      resvURL = link.href;
    }
  } else {
    // title = '3부강좌상세보기';
    titleArray = ['3부강좌상세보기', '2부강좌상세보기'];
    // const link = getLinksByTitle(
    //   // day,
    //   title
    // )[0];

    linkArray = titleArray.map((title) => getLinksByTitle(title)[0]);
    console.log(titleArray, linkArray);
    if (linkArray.length > 0) {
      linkArray.forEach((link, index) => {
        linkIndex = index;
        resvURL = link.href;
      });
    }
  }

  location.href = `${timerURL}&resvURL=${resvURL}`;
} else if (document.getElementById('time_area') !== null) {
  console.log('timer');

  let nowTime = document.getElementById('time_area').innerText.slice(-11);

  if (nowTime > '12시 00분 00초') {
    loginTime = loginTimeArray[1];
    resvTime = resvTimeArray[1];
    getURLTime = getURLTimeArray[1];
    listURL = listURLArray[1];
    // resvURL = resvUrlArray[1];
  } else {
    loginTime = loginTimeArray[0];
    resvTime = resvTimeArray[0];
    getURLTime = getURLTimeArray[0];
    listURL = listURLArray[0];
    // resvURL = resvUrlArray[0];
  }

  var loginTimer = window.setInterval(function () {
    if (document.getElementById('time_area').innerText.includes(loginTime)) {
      clearInterval(loginTimer);

      location.href = 'https://www.osansports.or.kr/yeyak/member/login';
    }
  }, 1000);

  var getURLTimer = window.setInterval(function () {
    if (document.getElementById('time_area').innerText.includes(getURLTime)) {
      clearInterval(getURLTimer);

      location.href = listURL;
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
  console.log('getURLtimer activated: ', getURLTime);
  console.log('resvURL: ', resvURL);
  console.log('선택 수업: ', title);
}
