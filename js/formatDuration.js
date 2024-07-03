function formatDuration(seconds) {
  let y,
    d,
    h,
    m,
    s = "";

  if (seconds < 60) {
    return `${seconds} ${+seconds > 1 ? "seconds" : "second"}`;
  }

  s = seconds % 60;
  minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes.toString()} ${
      +minutes > 1 ? " minutes" : " minute"
    } and ${s} ${+s > 1 ? " seconds" : " second"}`;
  }
}

console.log(formatDuration(60));
