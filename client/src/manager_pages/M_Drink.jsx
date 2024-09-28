import ManagerLayout from "../layouts/Manager_Layout";
import DrinkManager from "../manager_components/DrinkManager";
import ProtectedRoute from "../auth/protectedRoute";
const MDrink = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout>
                <DrinkManager />
                
            </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MDrink;