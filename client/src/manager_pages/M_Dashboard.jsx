import ManagerLayout from "../layouts/Manager_Layout";
import DashboardManager from "../manager_components/DashboardManager";
import ProtectedRoute from "../auth/protectedRoute";
const MDashboard = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout>
                <DashboardManager/>     
            </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MDashboard;