import Navbar from "../../components/Navbar"

const Tenants: React.FC = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100 px-8 py-8">
        <h1>Tenants</h1>
        {/* Add tenant-related components or content here */}
      </div>
    </div>
  )
}

export default Tenants