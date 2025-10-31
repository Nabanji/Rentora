import Navbar from "../components/Navbar";
import DashboardContent from "./DashboardContent";

const Dashboard: React.FC = () => {
  return (
    <div className="flex gap-3">
        <Navbar />
        <DashboardContent />
    </div>
  )
}

export default Dashboard