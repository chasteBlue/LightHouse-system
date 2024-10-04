import BarLayout from "../layouts/Bar_Layout";
import OrderBar from "../bar_components/OrderBar";
import ProtectedRoute from "../auth/protectedRoute";
const BOrder = () => {
    return (
        <ProtectedRoute allowedRoles={['barDesk']}>
            <BarLayout>
                <OrderBar/>      
            </BarLayout>
        </ProtectedRoute>
      )
}
export default BOrder;