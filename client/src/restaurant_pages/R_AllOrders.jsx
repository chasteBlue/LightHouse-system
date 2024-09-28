import RestaurantLayout from "../layouts/Restaurant_Layout";
import AllOrdersRestaurant from "../restaurant_components/AllOrdersRestaurant";
import ProtectedRoute from "../auth/protectedRoute";

const RAllOrders = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout>
                <AllOrdersRestaurant/>      
            </RestaurantLayout>
        </ProtectedRoute>
      )
}
export default RAllOrders;