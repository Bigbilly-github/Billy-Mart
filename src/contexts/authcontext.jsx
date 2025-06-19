
import { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../js/firebase"; // adjust path to your firebase config

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
export default AuthProvider

export const useAuth = () => useContext(AuthContext);
