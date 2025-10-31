import Navbar from "../components/Navbar";
import DashboardContent from "./content/DashboardContent";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          <DashboardContent />
        </main>
    </div>
  )
}

export default Dashboard