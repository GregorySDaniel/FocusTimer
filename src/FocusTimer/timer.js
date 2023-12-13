import State from "./state.js"
import * as el from "./elements.js"
import * as actions from "./actions.js"

export var decrement;

export function setTimer(){
  let minutes = State.minutes
  let seconds = State.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function run(){
  if(!State.isRunning){
    return
  }

  State.seconds--

  if(State.seconds < 0) {
    State.seconds = 59
    State.minutes--
  }

  if(State.minutes < 0) {
    actions.reset()
    el.clock.play()
    return
  }

  setTimer(State.minutes,State.seconds)
  
  setTimeout(() => run(), 1000)
}