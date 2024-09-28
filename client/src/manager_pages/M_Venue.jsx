import ManagerLayout from "../layouts/Manager_Layout";
import VenueManager from "../manager_components/VenueManager";
import ProtectedRoute from "../auth/protectedRoute";

const MVenue = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout>
                <VenueManager/>
            </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MVenue;