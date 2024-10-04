import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Corrected import statement
import Error401 from '../messages/ErrorPages/401';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token'); 
  const [isVerified, setIsVerified] = useState(null); 
  const [redirectPath, setRedirectPath] = useState('/login'); // Default redirect to login if no token
  const [isUnauthorized, setIsUnauthorized] = useState(false); // New state for unauthorized access
  const navigate = useNavigate(); // Use navigate hook to navigate

  useEffect(() => {
    const verifyToken = () => {
      if (!token) {
        setIsVerified(false);
        setRedirectPath('/login');
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const { staff_acc_role, guest_id, staff_id } = decodedToken;

        // Handle guest access
        if (guest_id) {
          if (allowedRoles.includes('guest')) {
            setIsVerified(true); // Allow access for guest if 'guest' is in allowedRoles
          } else {
            setIsUnauthorized(true); // Mark unauthorized for guest if not allowed
            setIsVerified(false);
          }
        } else if (staff_id) {
          if (allowedRoles.includes(staff_acc_role)) {
            setIsVerified(true); // Allow access if staff role is allowed
          } else {
            setIsUnauthorized(true); // Set unauthorized access state
            setIsVerified(false);
          }
        } else {
          setIsVerified(false);
          setRedirectPath('/staff_login'); // If no valid id, redirect to login
        }
      } catch (error) {
        console.error('Invalid token:', error);
        setIsVerified(false); // Invalid token, deny access
        setRedirectPath('/login');
      }
    };

    verifyToken();
  }, [token, allowedRoles]);

  if (isVerified === null) {
    return <div>Loading...</div>; // Show a loading indicator while verifying
  }

  if (isUnauthorized) {
    return <Error401 />; // Display 401 error page for unauthorized access
  }

  if (!isVerified) {
    navigate(redirectPath); // Redirect to the appropriate page based on user type
    return null; // Prevent further rendering
  }

  return children; 
};

export default ProtectedRoute;
