export function setBackground(num) {
  toNumber(num)
  num = num < -10 ? -10 : num > 30 ? 30 : num

  let red = (10 + num) * 12.75
  let blue = 255 - (10 + num) * 12.75
  let green
  if (num >= -10 && num <= 10) {
    green = 255 - (10 + num) * 0.4
  } else {
    green = 255 - (10 + num) * 2.7
  }
  if (red > 255) {
    red = 255
  }
  if (blue < 0) {
    blue = 0
  }
  let result = `rgb(${Math.round(red)} ${Math.round(green)} ${Math.round(
    blue
  )} )`
  return result
}

export const formatDate = (date) => {
  toNumber(date)
  let formDate = new Date(date * 1000)
  let monthDate = formDate.getDate()
  let monthNumber = formDate.getMonth()
  let day
  let month
  let minutes = formDate.getUTCMinutes().toString()
  let hours = formDate.getUTCHours().toString()
  switch (monthDate) {
    case 1:
      day = monthDate + "st"
      break
    case 2:
      day = monthDate + "nd"
      break
    case 3:
      day = monthDate + "rd"
      break
    default:
      day = monthDate + "th"
  }
  switch (monthNumber) {
    case 0:
      month = "Jan"
      break
    case 1:
      month = "Feb"
      break
    case 2:
      month = "Mar"
      break
    case 3:
      month = "Apr"
      break
    case 4:
      month = "May"
      break
    case 5:
      month = "Jun"
      break
    case 6:
      month = "Jul"
      break
    case 7:
      month = "Aug"
      break
    case 8:
      month = "Sep"
      break
    case 9:
      month = "Oct"
      break
    case 10:
      month = "Nov"
      break
    case 11:
      month = "Dec"
      break
    default:
      return
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes
  }
  if (hours.length < 2) {
    hours = "0" + hours
  }

  return `${month} ${day}, ${hours} : ${minutes}`
}
export function getTime(num) {
  toNumber(num)
  let date = new Date(num * 1000)
  let hours = date.getUTCHours().toString()
  let minutes = date.getUTCMinutes().toString()

  if (minutes.length < 2) {
    minutes = "0" + minutes
  }
  if (hours.length < 2) {
    hours = "0" + hours
  }
  return `${hours}:${minutes}`
}
function toNumber(num) {
  if (typeof num !== "number") {
    num = Number(num)
  }
  return num
}
