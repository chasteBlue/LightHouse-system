import RestaurantLayout2 from "../layouts/Restaurant_Layout2";
import TableMainRestaurant from "../restaurant_components/TableMainRestaurant";
import ProtectedRoute from "../auth/protectedRoute";
const RTableMain = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout2>
                <TableMainRestaurant />      
            </RestaurantLayout2>
        </ProtectedRoute>
      )
}
export default RTableMain;