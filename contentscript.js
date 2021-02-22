var s = document.createElement('script');

s.src = chrome.extension.getURL('alphatanten.js');
console.log(s);
s.charset = 'UTF-8';
(document.head || document.documentElement).appendChild(s);
s.onload = function () {
  s.parentNode.removeChild(s);
};
