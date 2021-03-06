function humanReadable(seconds) {
  return format(parseInt(seconds / 3600)) + ":" +
         format(parseInt(seconds / 60 % 60)) + ":" +
         format(seconds % 60)
}

const format = input => input < 10 ? `0${input}` : input;

humanReadable(0) // '00:00:00'
humanReadable(5) // '00:00:05'
humanReadable(60) // '00:01:00'
humanReadable(86399) // '23:59:59'
humanReadable(359999) // '99:59:59'
