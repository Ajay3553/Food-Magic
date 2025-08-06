import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector(state => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    } else {
      setLoader(false);
    }
  }, [authStatus, navigate, authentication]);

  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-blue-300 border-dashed rounded-full animate-spin-reverse"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
