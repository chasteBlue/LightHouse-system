import React from 'react';
import Layout from "../components/Layout";
import Reservations from "../components/Reservations";
import ProtectedRoute from "../auth/protectedRoute"; 

const GReservations = () => {
    return (
        <ProtectedRoute> {/* Protect the GReservations component */}
            <Layout>
                <Reservations />
            </Layout>
        </ProtectedRoute>
    );
}

export default GReservations;
