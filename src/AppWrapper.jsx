import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Components/Loading";

const AppWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default AppWrapper;
