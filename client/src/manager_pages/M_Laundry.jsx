import ManagerLayout from "../layouts/Manager_Layout";
import LaundryManager from "../manager_components/LaundryManager";
import ProtectedRoute from "../auth/protectedRoute";


const MLaundry = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout>
                <LaundryManager />
            </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MLaundry;