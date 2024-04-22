import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  //default axios
  const dd = (axios.defaults.headers.common["Authorization"] = auth?.token);
  // console.log("auht", auth);
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      // console.log("jjjjjjjjjjjjjjjj", parseData);
      setAuth({
        ...auth,
        user: parseData?.user,
        token: parseData?.token,
      });
      // console.log("tooo", parseData.user.tokens[0].token)
    }
    //eslint-disable-next-line
  }, []);
  return (
    // console.log("jjjjjjjjj", auth),
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
