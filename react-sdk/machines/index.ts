import { createMachine, spawn, ActorRefFrom, forwardTo } from "xstate"

import CartMachine from "./cart"
import EventsMachine from "./events"
import SearchMachine from "./search"

const CART_MACHINE = "CartMachine"
const EVENTS_MACHINE = "EventsMachine"
const SEARCH_MACHINE = "SearchMachine"

const RootMachine = createMachine<RootMachineContext, RootMachineEvents>({
  id: "Root",
  initial: "ready",
  context: () => ({
    cart: spawn(CartMachine, CART_MACHINE),
    events: spawn(EventsMachine, EVENTS_MACHINE),
    search: spawn(SearchMachine, SEARCH_MACHINE),
    eventsCount: 0,
  }),
  states: {
    ready: {
      on: {
        EVENT: {
          actions: forwardTo(EVENTS_MACHINE),
        },
      },
    },
  },
})

interface RootMachineContext {
  cart: ActorRefFrom<typeof CartMachine>
  events: ActorRefFrom<typeof EventsMachine>
  search: ActorRefFrom<typeof SearchMachine>
  eventsCount: number
}

type RootMachineEvents = {
  type: "EVENT"
  data: {
    type: "INTERACTION" | "ECOMMERCE" | "ERROR"
    info: string
  }
}

export default RootMachine
