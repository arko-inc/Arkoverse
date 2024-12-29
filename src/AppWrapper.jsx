import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Components/Loading";

const AppWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, [location]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default AppWrapper;
