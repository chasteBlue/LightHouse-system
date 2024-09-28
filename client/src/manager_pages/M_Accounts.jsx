import React from "react";
import ManagerLayout from "../layouts/Manager_Layout";
import AccountManager from "../manager_components/AccountManager";
import ProtectedRoute from "../auth/protectedRoute"; 

const MAccounts = () => {
  return (
    <ProtectedRoute allowedRoles={['manager']}>
      <ManagerLayout>
        <AccountManager />
      </ManagerLayout>
    </ProtectedRoute>
  );
};

export default MAccounts;
