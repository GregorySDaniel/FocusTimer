import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.run()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove("running")
  state.minutes=0
  state.seconds=0
  timer.setTimer()
}

export function plus(){
  state.minutes+=5
  timer.setTimer()
}

export function minus(){
  if(state.minutes<=5){
    state.minutes-=1
    timer.setTimer()
    return
  }
  state.minutes-=5
  timer.setTimer()
}