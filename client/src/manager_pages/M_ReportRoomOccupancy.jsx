import ManagerLayout2 from "../layouts/ManagerLayout2";
import ReportRoomOccupancy from "../manager_reports/ReportRoomOccupancy";
import ProtectedRoute from "../auth/protectedRoute";


const MReportRoomOccupancy = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout2>
                <ReportRoomOccupancy />
            </ManagerLayout2>
        </ProtectedRoute>
      )
}
export default MReportRoomOccupancy;