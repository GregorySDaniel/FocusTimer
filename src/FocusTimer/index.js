import State from "./state.js"
import * as events from "./events.js"
import * as timer from "./timer.js"

export function start (minutes, seconds) {
  State.minutes = Number(minutes)
  State.seconds = Number(seconds)

  timer.setTimer()
  events.registrerControlers()
}
