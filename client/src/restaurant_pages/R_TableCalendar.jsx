import RestaurantLayout2 from "../layouts/Restaurant_Layout2";
import TableRevCalendar from "../restaurant_components/TableRevCalendar";
import ProtectedRoute from "../auth/protectedRoute";

const RTableRevCalendar = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout2>
                <TableRevCalendar/>      
            </RestaurantLayout2>
        </ProtectedRoute>
      )
}
export default RTableRevCalendar;