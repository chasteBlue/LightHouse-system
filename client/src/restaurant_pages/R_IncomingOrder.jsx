import RestaurantLayout from "../layouts/Restaurant_Layout";
import IncomingOrderRestaurant from "../restaurant_components/IncomingOrderRestaurant";
import ProtectedRoute from "../auth/protectedRoute";
const RIncomingOrder = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout>
                <IncomingOrderRestaurant/>      
            </RestaurantLayout>
        </ProtectedRoute>
      )
}
export default RIncomingOrder;