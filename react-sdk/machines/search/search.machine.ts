import { createMachine, assign, sendParent } from "xstate"

import { search } from "@its-sdk"

import type { SearchHit } from "@its-types/api/search"

export interface SearchMachineContext {
  items: Array<SearchHit>
  searchTerm: string
}

const SearchMachine = createMachine<
  SearchMachineContext,
  { type: "SEARCH"; searchTerm: string }
>(
  {
    id: "Search",
    initial: "idle",
    context: {
      searchTerm: "",
      items: [],
    },
    states: {
      idle: {
        on: {
          SEARCH: "debouncing",
        },
      },
      debouncing: {
        after: {
          500: "fetching",
        },
      },
      fetching: {
        invoke: {
          src: "search",
          onDone: {
            actions: assign({
              items: (_, { data }) => {
                return data
              },
            }),
            target: "idle",
          },
          onError: {
            actions: sendParent({
              type: "EVENT",
              data: {
                type: "ERROR",
                info: "Search Error",
              },
            }),
            target: "idle",
          },
        },
      },
    },
  },
  {
    services: {
      search: ({ searchTerm }) => search(searchTerm),
    },
  }
)

export default SearchMachine
