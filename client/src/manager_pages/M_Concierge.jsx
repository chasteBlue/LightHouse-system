import ManagerLayout from "../layouts/Manager_Layout";
import ConciergeManager from "../manager_components/ConciergeManager";
import ProtectedRoute from "../auth/protectedRoute"; 

const MConcierge = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
        <ManagerLayout>
            <ConciergeManager/>
            
        </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MConcierge;