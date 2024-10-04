import BarLayout from "../layouts/Bar_Layout";
import AllOrdersBar from "../bar_components/AllOrdersBar";
import ProtectedRoute from "../auth/protectedRoute";
const BAllOrders = () => {
    return (
        <ProtectedRoute allowedRoles={['barDesk']}>
            <BarLayout>
                <AllOrdersBar/>      
            </BarLayout>
        </ProtectedRoute>
      )
}
export default BAllOrders;