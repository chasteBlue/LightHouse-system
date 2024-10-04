import ManagerLayout2 from "../layouts/ManagerLayout2";
import ReportForecasting from "../manager_reports/ReportForecasting";
import ProtectedRoute from "../auth/protectedRoute";


const MReportForecasting = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout2>
                <ReportForecasting />
            </ManagerLayout2>
        </ProtectedRoute>
      )
}
export default MReportForecasting;