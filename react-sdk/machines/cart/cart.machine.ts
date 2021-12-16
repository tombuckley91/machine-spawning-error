import { createMachine, assign } from "xstate"

export interface CartContext {
  cart: { [key: string]: number }
}

const cartMachine = createMachine<
  CartContext,
  { type: "ADD"; sku: string } | { type: "DELETE"; sku: string }
>(
  {
    id: "Cart",
    initial: "inactive",
    context: {
      cart: {},
    },
    states: {
      inactive: {
        on: {
          ADD: "adding",
          DELETE: { target: "deleting", cond: "skuIsPresent" },
        },
      },
      adding: {
        entry: assign({
          cart: ({ cart }, { sku }) =>
            sku in cart
              ? { ...cart, [sku]: cart[sku] + 1 }
              : { ...cart, [sku]: 1 },
        }),
        invoke: {
          src: "updateCart",
          onDone: "inactive",
        },
      },
      deleting: {
        entry: assign({
          cart: ({ cart }, { sku }) => {
            if (sku in cart === false) {
              return cart
            }

            const updatedCart = { ...cart }

            if (cart[sku] === 1) {
              delete updatedCart[sku]
            } else {
              updatedCart[sku] = cart[sku] - 1
            }

            return updatedCart
          },
        }),
        invoke: {
          src: "updateCart",
          onDone: "inactive",
        },
      },
    },
  },
  {
    services: {
      updateCart: async ({ cart }) => {
        console.log(
          "!!! Hello ALl - I would call the sdk with the following items: " +
            JSON.stringify(cart)
        )

        return cart
      },
    },
    guards: {
      skuIsPresent: ({ cart }, { sku }) => sku in cart,
    },
  }
)

export default cartMachine
