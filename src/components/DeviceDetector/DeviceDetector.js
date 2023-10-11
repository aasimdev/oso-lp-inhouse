export function detectDevice() {
  const userAgent = navigator.userAgent

  let device

  if (userAgent.match(/iPhone/i)) {
    device = "iPhone"
  } else if (userAgent.match(/iPad/i)) {
    device = "iPad"
  } else if (userAgent.match(/Macintosh/i)) {
    device = "Mac"
  } else if (userAgent.match(/Windows/i)) {
    device = "Windows"
  } else if (userAgent.match(/Android/i)) {
    device = "Android"
  } else {
    device = "Unknown"
  }

  return device
}
