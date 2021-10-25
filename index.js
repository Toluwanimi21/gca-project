window.onload = () => {
    let now_ = new Date().getTime();
    changeDueTo(now_);
    setInterval(() => {
      let now = new Date().getTime();
      changeDueTo(now);
    }, 1000);
  };

  function changeDueTo(now) {
    let down = new Date("Dec 31, 2021 23:59:00").getTime();
  
    let left = generateTimeRemaining(now, down);
  
    let days = document.querySelectorAll(".number")[0];
    let hours = document.querySelectorAll(".number")[1];
    let minutes = document.querySelectorAll(".number")[2];
    let seconds = document.querySelectorAll(".number")[3];
  
    days.innerHTML = left.days.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    hours.innerHTML = left.hours.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    minutes.innerHTML = left.minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    seconds.innerHTML = left.seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }
  function generateTimeRemaining(now, down) {
    let timeRemainingObject = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    let timeRemaining = down - now;
  
    let oneDay = 1000 * 60 * 60 * 24;
    let oneHour = 1000 * 60 * 60;
    let oneMinute = 1000 * 60;
    let oneSecond = 1000;
  
    let days = Math.floor(timeRemaining / oneDay);
    let hours = Math.floor((timeRemaining % oneDay) / oneHour);
    let minutes = Math.floor((timeRemaining % oneHour) / oneMinute);
    let seconds = Math.floor((timeRemaining % oneMinute) / oneSecond);
    timeRemainingObject.days = days;
    timeRemainingObject.hours = hours;
    timeRemainingObject.minutes = minutes;
    timeRemainingObject.seconds = seconds;
    return timeRemainingObject;
  }
