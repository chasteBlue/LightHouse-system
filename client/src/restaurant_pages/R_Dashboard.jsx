import ProtectedRoute from "../auth/protectedRoute";
import RestaurantLayout from "../layouts/Restaurant_Layout";
import DashboardRestaurant from "../restaurant_components/DashboardRestaurant";

const RDashboard = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout>
                <DashboardRestaurant/>      
            </RestaurantLayout>
        </ProtectedRoute>
      )
}
export default RDashboard;