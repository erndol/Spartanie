
var hourHand = document.getElementById('hour_hand');
var minuteHand = document.getElementById('minute_hand');
var secondHand = document.getElementById('second_hand');

function initClock() {
  var date = new Date();
  var hour = date.getHours() % 12;
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var hourDeg = hour * 30;
  var minuteDeg = minute * 6;
  var secondDeg = second * 6;

  hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
  minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
  secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';


  setTimeout(initClock, 1000);
}

initClock();
