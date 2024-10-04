import BarLayout from "../layouts/Bar_Layout";
import DashboardBar from "../bar_components/DashboardBar";
import ProtectedRoute from "../auth/protectedRoute";
const BDashboard = () => {
    return (
        <ProtectedRoute allowedRoles={['barDesk']}>
            <BarLayout>
                <DashboardBar/>      
            </BarLayout>
        </ProtectedRoute>
      )
}
export default BDashboard;