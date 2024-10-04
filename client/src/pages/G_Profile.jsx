import Layout from "../components/Layout"; 
import Profile from "../components/Profile";
import ProtectedRoute from "../auth/protectedRoute"; 

const GProfile = () => {
    return (
        <ProtectedRoute allowedRoles={['guest']}> {/* Allow guest role */}
            <Layout>
                <Profile/>
            </Layout>
        </ProtectedRoute> 
      )
}

export default GProfile;
