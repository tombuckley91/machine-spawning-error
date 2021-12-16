import Image from "next/image"
import { useContext } from "react"

import { SDKContext } from "../../pages/_app"

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const { search } = useContext(SDKContext)
  const { searchProducts } = search

  return (
    <section role="search" className="h-full hidden lg:flex">
      <label htmlFor="header-search">
        <input
          type="search"
          name="its-search"
          id="header-search"
          placeholder="Click to simulate search error"
          className="border border-skin-base h-full outline-none pl-2"
          size={50}
        />
      </label>
      <button
        type="submit"
        title="Search this website now"
        className="bg-skin-primary h-10 w-10 flex justify-center items-center"
        onClick={() => searchProducts("bags")}
      >
        <Image
          src="/ios-search-light.svg"
          alt="Search"
          height="20px"
          width="20px"
          layout="intrinsic"
        />
      </button>
    </section>
  )
}

export default Search
