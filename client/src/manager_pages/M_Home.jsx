import ManagerLayout from "../layouts/Manager_Layout";
import HomeManager from "../manager_components/HomeManager";
import ProtectedRoute from "../auth/protectedRoute";
const MHome = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout>
                <HomeManager />            
            </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MHome;