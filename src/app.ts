import * as $ from 'jquery';

let counter = 0

export function incCounter(message: string) {
  $('.main.message').html(`Counter: ${counter++}`)
}

export function toggleBg() {
  $('.main.message').toggleClass('background')
}

export function toggleFg() {
  $('.main.message').toggleClass('foreground')
}
