import SearchMachine from "../../machines/search"
import { useActor } from "@xstate/react"

import type { ActorRefFrom } from "xstate"

const useSearch = (machine: ActorRefFrom<typeof SearchMachine>) => {
  const [state, send] = useActor(machine)

  return {
    searchProducts: (searchTerm: string) =>
      send({ type: "SEARCH", searchTerm }),
    results: state["context"]["items"],
  }
}

export default useSearch
