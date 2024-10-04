import BarLayout from "../layouts/Bar_Layout";
import ProceedBar from "../bar_components/ProceedBar";
import ProtectedRoute from "../auth/protectedRoute";
const BProceedBarOrder = () => {
    return (
        <ProtectedRoute allowedRoles={['barDesk']}>
            <BarLayout>
                <ProceedBar/>      
            </BarLayout>
        </ProtectedRoute>
      )
}
export default BProceedBarOrder;