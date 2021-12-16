import type { AppProps } from "next/app"
import { createContext } from "react"

import ReactSDK from "@react-sdk"
import SiteLayout from "@layouts/Site"

import "../styles/globals.css"

// @ts-expect-error
export const SDKContext = createContext<sdk>(null)

function MyApp({ Component, pageProps }: AppProps) {
  const sdk = ReactSDK()

  return (
    <SDKContext.Provider value={sdk}>
      <SiteLayout content={<Component {...pageProps} />} />
    </SDKContext.Provider>
  )
}

type sdk = ReturnType<typeof ReactSDK>

export default MyApp
