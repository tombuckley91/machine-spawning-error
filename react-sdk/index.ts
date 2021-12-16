import { useMachine } from "@xstate/react"
import ReactSDKMachine from "./machines"
import useCart from "./hooks/useCart"
import { useSearch } from "./hooks/useSearch"

const useSDK = () => {
  const [state] = useMachine(ReactSDKMachine, { devTools: true })

  return {
    cart: useCart(state.context.cart),
    search: useSearch(state.context.search),
  }
}

export default useSDK
