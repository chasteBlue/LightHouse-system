import RestaurantLayout from "../layouts/Restaurant_Layout";
import HomeRestaurant from "../restaurant_components/HomeRestaurant";
import ProtectedRoute from "../auth/protectedRoute";
const RHomeRestaurant = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout>
                <HomeRestaurant/>      
            </RestaurantLayout>
        </ProtectedRoute>
      )
}
export default RHomeRestaurant;