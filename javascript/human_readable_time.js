function humanReadable(seconds) {
  var hours = 0;
  var minutes = 0;

  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600);
    seconds = seconds - (hours * 3600);
  }

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds - (minutes * 60);
  }

  return `${format(hours)}:${format(minutes)}:${format(seconds)}`
}

const format = input => input < 10 ? `0${input}` : input;

humanReadable(0) // '00:00:00'
humanReadable(5) // '00:00:05'
humanReadable(60) // '00:01:00'
humanReadable(86399) // '23:59:59'
humanReadable(359999) // '99:59:59'
