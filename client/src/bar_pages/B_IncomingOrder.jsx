import BarLayout from "../layouts/Bar_Layout";
import IncomingOrderBar from "../bar_components/IncomingOrderBar";
import ProtectedRoute from "../auth/protectedRoute";
const BIncomingOrder = () => {
    return (
        <ProtectedRoute allowedRoles={['barDesk']}>
            <BarLayout>
                <IncomingOrderBar/>      
            </BarLayout>
        </ProtectedRoute>
      )
}
export default BIncomingOrder;