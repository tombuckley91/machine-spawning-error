import { render } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"

import Search from "."
import { SDKContext } from "../../pages/_app"
import useSDK from "@react-sdk"

describe("Component: Search", () => {
  it("renders", () => {
    const { result } = renderHook(useSDK)
    const { current } = result

    render(
      <SDKContext.Provider value={current}>
        <Search />
      </SDKContext.Provider>
    )

    expect(true).toBe(true)
  })
})
