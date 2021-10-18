import React, { createContext } from "react";
import useFirebase from "./../hooks/useFirebase";
import useServices from "./../hooks/useServices";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  const { detail } = useServices();

  const data = { allContext, detail };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
