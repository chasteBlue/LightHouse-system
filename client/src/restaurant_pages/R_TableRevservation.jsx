import RestaurantLayout2 from "../layouts/Restaurant_Layout2";
import TablReservations from "../restaurant_components/TableResevations";
import ProtectedRoute from "../auth/protectedRoute";
const RTablReservations = () => {
    return (
        <ProtectedRoute allowedRoles={['restaurantDesk']}>
            <RestaurantLayout2>
                <TablReservations />      
            </RestaurantLayout2>
        </ProtectedRoute>
      )
}
export default RTablReservations;