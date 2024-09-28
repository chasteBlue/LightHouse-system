import RestaurantLayout from "../layouts/Restaurant_Layout";
import OrderRestaurant from "../restaurant_components/OrderRestaurant";
import ProtectedRoute from "../auth/protectedRoute";
const ROrder = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout>
                <OrderRestaurant/>      
            </RestaurantLayout>
        </ProtectedRoute>
      )
}
export default ROrder;