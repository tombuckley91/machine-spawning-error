import Image from "next/image"
import Search from "@components/Search"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="p-2 lg:p-6">
      <div className="flex justify-between items-center md:mb-4">
        <Search />
      </div>
    </header>
  )
}

export default Header
