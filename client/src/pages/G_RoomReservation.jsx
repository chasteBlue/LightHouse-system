import Layout from "../components/Layout";
import RoomReservation from "../components/RoomReservation";
import ProtectedRoute from "../auth/protectedRoute"; 


const GRoomReservation = () => {
    return (
        <ProtectedRoute allowedRoles={['guest']}>
            <Layout>
                <RoomReservation/>
            </Layout>
        </ProtectedRoute> 
      )
}
export default GRoomReservation;