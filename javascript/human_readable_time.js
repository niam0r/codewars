function humanReadable(seconds) {
  let hours = seconds % 3600;
  seconds -= hours * 3600;

  let minutes = seconds % 60;
  seconds -= minutes * 60;

  console.log(`${format(hours)}:${format(minutes)}:${format(seconds)}`)
  return `${format(hours)}:${format(minutes)}:${format(seconds)}`
}

const format = input => input < 10 ? `0${input}` : input;

humanReadable(0) // '00:00:00'
humanReadable(5) // '00:00:05'
humanReadable(60) // '00:01:00'
humanReadable(86399) // '23:59:59'
humanReadable(359999) // '99:59:59'
