import ManagerLayout2 from "../layouts/ManagerLayout2";
import ReportSales from "../manager_reports/ReportSales";
import ProtectedRoute from "../auth/protectedRoute";


const MReportSales = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout2>
                <ReportSales />
            </ManagerLayout2>
        </ProtectedRoute>
      )
}
export default MReportSales;