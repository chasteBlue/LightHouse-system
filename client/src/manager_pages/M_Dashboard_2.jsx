import ManagerLayout2 from "../layouts/ManagerLayout2";
import DashboardManager2 from "../manager_components/DashboardManager2";
import ProtectedRoute from "../auth/protectedRoute";
const MDashboard2 = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout2>
                <DashboardManager2/> 
            </ManagerLayout2>
        </ProtectedRoute>
      )
}
export default MDashboard2;