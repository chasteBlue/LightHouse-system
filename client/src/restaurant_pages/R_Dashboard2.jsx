import RestaurantLayout2 from "../layouts/Restaurant_Layout2";
import DashboardRestaurant2 from "../restaurant_components/DashboardRestaurant2";
import ProtectedRoute from "../auth/protectedRoute";
const RDashboard2 = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
        <RestaurantLayout2>
            < DashboardRestaurant2 />      
        </RestaurantLayout2>
        </ProtectedRoute>
      )
}
export default RDashboard2;