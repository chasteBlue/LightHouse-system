import ManagerLayout from "../layouts/Manager_Layout";
import FoodPackageManager from "../manager_components/FoodPackage";
import ProtectedRoute from "../auth/protectedRoute";


const MFoodPackage = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout>
                <FoodPackageManager />
                
            </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MFoodPackage;