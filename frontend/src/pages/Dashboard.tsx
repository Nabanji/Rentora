import { useNavigate } from "react-router-dom"
import { supabase } from "../supabaseClient"

const Dashboard: React.FC = () => {

  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Sign out error:", error);
    navigate("/");
  };

  return (
    <>
        <h1>Dashboard</h1>
        <button onClick={handleSignOut}>Sign Out</button>
    </>
  )
}

export default Dashboard