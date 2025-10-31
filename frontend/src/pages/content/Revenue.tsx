import Navbar from "../../components/Navbar"

const Revenue: React.FC = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100 px-8 py-8">
        <h1>Revenue</h1>
        {/* Add revenue-related components or content here */}
      </div>
    </div>
  )
}

export default Revenue