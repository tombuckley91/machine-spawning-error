import { createMachine, assign } from "xstate"
import { choose } from "xstate/lib/actions"

type EventsMachineEvents = {
  type: "EVENT"
  data: {
    type: "INTERACTION" | "ECOMMERCE" | "ERROR"
    info: string
  }
}

interface EventsMachineContext {
  queuedEvents: Array<EventsMachineEvents>
}

const EventsMachine = createMachine<EventsMachineContext, EventsMachineEvents>(
  {
    id: "Events",
    initial: "inactive",
    context: {
      queuedEvents: [],
    },
    states: {
      inactive: {
        on: {
          EVENT: {
            actions: assign({
              queuedEvents: ({ queuedEvents }, event) => [
                ...queuedEvents,
                event,
              ],
            }),
            target: "processing",
          },
        },
      },
      processing: {
        entry: choose([
          {
            actions: "SEND_GA_EVENT",
            cond: "GA_REQUIRED",
          },
          {
            actions: assign({
              queuedEvents: ({ queuedEvents }) => queuedEvents.slice(1),
            }),
          },
        ]),
      },
    },
  },
  {
    guards: {
      GA_REQUIRED: ({ queuedEvents }) =>
        queuedEvents[0].data.type === "INTERACTION",
      QUEUED_EVENTS_AVAILABLE: ({ queuedEvents }) => {
        debugger
        return queuedEvents.length > 0
      },
    },
    actions: {
      SEND_GA_EVENT: async () => {},
    },
  }
)

export default EventsMachine
