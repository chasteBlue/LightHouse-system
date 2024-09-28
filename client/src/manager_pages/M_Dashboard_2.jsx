import ManagerLayout2 from "../layouts/ManagerLayout2";
import Home from "../components/Home";
import ProtectedRoute from "../auth/protectedRoute";
const MDashboard2 = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout2>
                <Home/> 
            </ManagerLayout2>
        </ProtectedRoute>
      )
}
export default MDashboard2;