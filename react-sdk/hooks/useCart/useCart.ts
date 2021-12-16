import cartMachine from "../../machines/cart"
import { useActor } from "@xstate/react"

import type { ActorRefFrom } from "xstate"

const useCart = (machine: ActorRefFrom<typeof cartMachine>) => {
  const [state, send] = useActor(machine)

  return {
    addToCart: (sku: string) => send({ type: "ADD", sku }),
    removeFromCart: (sku: string) => send({ type: "DELETE", sku }),
    cart: state["context"]["cart"],
  }
}

export default useCart
