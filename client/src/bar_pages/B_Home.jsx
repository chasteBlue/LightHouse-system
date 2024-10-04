import BarLayout from "../layouts/Bar_Layout";
import HomeBar from "../bar_components/HomeBar";
import ProtectedRoute from "../auth/protectedRoute";
const BHomeBar = () => {
    return (
        <ProtectedRoute allowedRoles={['barDesk']}>
            <BarLayout>
                <HomeBar/>      
            </BarLayout>
        </ProtectedRoute>
      )
}
export default BHomeBar;