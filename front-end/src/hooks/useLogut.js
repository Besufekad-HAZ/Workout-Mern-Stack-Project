import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    // remove user from storage
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    setIsLoading(false);
  };
  return { logout, error, isLoading };
};
