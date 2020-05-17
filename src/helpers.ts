import * as $ from 'jquery'

export function toggleBg() {
  $('.main.message').toggleClass('background')
}

export function toggleFg() {
  $('.main.message').toggleClass('foreground')
}
