import React from "react";

const AuthContext = React.createContext({
  user: undefined,
  update: (data) => {},
});

export default AuthContext;
