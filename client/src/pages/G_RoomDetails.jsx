import Layout from "../components/Layout";
import RoomDetails from "../components/Room-Details";
import ProtectedRoute from "../auth/protectedRoute"; 

const GRoomDetails = () => {
    return (
        <ProtectedRoute allowedRoles={['guest']}> 
            <Layout>
                <RoomDetails/>
            </Layout>
        </ProtectedRoute> 
      );
}
export default GRoomDetails;