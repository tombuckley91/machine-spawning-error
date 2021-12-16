import Header from "@components/Header"

interface SiteProps {
  content: React.ReactNode
}

const Site: React.FC<SiteProps> = ({ content }) => {
  return (
    <div className="text-skin-primary">
      <Header />
    </div>
  )
}

export default Site
