import { render } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"

import Header from "."
import { SDKContext } from "../../pages/_app"
import useSDK from "@react-sdk"

describe("Component: Header", () => {
  it("renders", () => {
    const { result } = renderHook(useSDK)
    const { current } = result

    render(
      <SDKContext.Provider value={current}>
        <Header />
      </SDKContext.Provider>
    )

    expect(true).toBe(true)
  })
})
