import ManagerLayout2 from "../layouts/ManagerLayout2";
import ReportMenuOp from "../manager_reports/ReportMenuOp";
import ProtectedRoute from "../auth/protectedRoute";


const MReportMenuOp = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout2>
                <ReportMenuOp />
            </ManagerLayout2>
        </ProtectedRoute>
      )
}
export default MReportMenuOp;