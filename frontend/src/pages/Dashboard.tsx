import Navbar from "../components/Navbar";
import DashboardContent from "./content/DashboardContent";

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
        <Navbar />
        <DashboardContent />
    </div>
  )
}

export default Dashboard