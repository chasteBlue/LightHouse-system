import ManagerLayout from "../layouts/Manager_Layout";
import FoodManager from "../manager_components/FoodManager";
import ProtectedRoute from "../auth/protectedRoute";
const MFood = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout>
                <FoodManager/>   
            </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MFood;