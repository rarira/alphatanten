var fs = require('fs');

var _0x3bf7 = [
  '',
  'Y',
  'f',
  'noConflict',
  '변경',
  '*',
  'realperson',
  '.realperson-text',
  'val',
  '#defaultReal',
  'click',
  '.realperson-challenge',
  'preventDefault',
  '#baseURL',
  '/inc/jquery-person/jquery.realperson.php',
  'getHash',
  '.is-realperson',
  '#revcd',
  'post',
  'json',
  'msg',
  'stat',
  'goodday',
  'disable',
  'visibility',
  'hidden',
  'css',
  '#btn_realperson',
  'ajax',
  'href',
  'location',
  'attr',
  'a',
  'children',
  '.category_li_over',
  '.category_li_out',
  '#baseSSL',
  '#comcd',
  '#partcd',
  '#placecd',
  '#is_list',
  '#category_index',
  '#receipt_date',
  'text',
  'span:eq(0)',
  'find',
  'span:eq(1)',
  'span:eq(2)',
  'length',
  '0',
  '/rent/reservation/index/',
  '/',
  'background-color',
  'yellow',
  'mouseover',
  'class',
  'week_holiday',
  '#FFEDED',
  '#E8E9FF',
  'white',
  'mouseout',
  'each',
  '.calendar_table td',
  '#year',
  '#month',
  '#rev_day',
  '/Y',
  '#select_group_sport',
  '/N',
  '#select_group_notsport',
  '#max_rent_time',
  '#sports_etime_1',
  '#sports_stime_1',
  '#select_cnt',
  '#reservation_stime',
  '#sports_stime_',
  '#sports_etime_',
  '#reservation_etime',
  'checked',
  '#select_',
  'disabled',
  '.select_check',
  ':checked',
  'is',
  'N',
  '최대 대관이용시간을 초과하였습니다.',
  'type',
  '#events_stime_',
  '#events_etime_',
  '#select_events_',
  '.select_check_events',
  'basecd01',
  '#basecd',
  'SIMC01',
  '07',
  '자동입력방지 문자가 인증되지 않았습니다. 문자입력후 확인버튼을 눌러주세요.',
  'focus',
  '#min_rent_time',
  '예약가능한 최소시간은 ',
  '시간 입니다.',
  ' / ',
  'submit',
  '#reservation_form',
  'ready',
];

var doc = fs.readFileSync('rent_reservation_decoded.txt', 'utf8');
// doc.replace(/var/g, 'const');
let newDoc;
var origDoc = doc.slice(0);

_0x3bf7.forEach((element, index) => {
  var regFront = `_0x3bf7\\[`;
  var regRear = `\\]`;
  var reg = `${regFront}${index}${regRear}`;

  // console.log(typeof new RegExp(reg, 'g'));
  // console.log(reg);
  // console.log(element);
  // console.log(new RegExp(`/_0x3bf7[\[]${index}[\]]/`, 'g'));
  newDoc = origDoc.replace(new RegExp(reg, 'g'), element);
  // if (index === 0) {
  //   console.log(doc);
  //   console.log(typeof regEx);
  //   console.log(new RegExp(reg, 'g'));
  // }
  origDoc = newDoc.slice(0);
});

fs.writeFileSync('decoded.txt', origDoc);
