import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "./useFirebaseAuth";
const a = "";
const b = "";
const authUserContext = createContext({
  currentUser: null,
  loading: true,
  signup: async () => {},
  login: async (a, b) => {},
  signout: async (a, b) => {},
});
export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
