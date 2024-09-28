import RestaurantLayout from "../layouts/Restaurant_Layout";
import ProceedRestaurant from "../restaurant_components/ProceedRestaurant";
import ProtectedRoute from "../auth/protectedRoute";
const RProceedRestaurant = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout>
                <ProceedRestaurant/>      
            </RestaurantLayout>
        </ProtectedRoute>
      )
}
export default RProceedRestaurant;