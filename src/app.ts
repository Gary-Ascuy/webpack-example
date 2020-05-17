import * as $ from 'jquery'

export * from './helpers'
let counter = 0

export function incCounter(message: string) {
  $('.main.message').html(`Counter: ${counter++}`)
}

