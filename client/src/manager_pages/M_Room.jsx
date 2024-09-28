import ManagerLayout from "../layouts/Manager_Layout";
import RoomManager from "../manager_components/RoomManager";
import ProtectedRoute from "../auth/protectedRoute";
const MRoom = () => {
    return (
        <ProtectedRoute allowedRoles={['manager']}>
            <ManagerLayout>
                <RoomManager/>
                
            </ManagerLayout>
        </ProtectedRoute>
      )
}
export default MRoom;