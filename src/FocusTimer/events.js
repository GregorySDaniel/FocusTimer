import { controlers } from "./elements.js"
import * as actions from "./actions.js"
export function registrerControlers(){
  controlers.addEventListener('click', (event) => {
    const action = event.target.dataset.action
  
  if(typeof actions[action] != "function"){
    return
  }

  actions[action]()
  })
}
