import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/auth.service";
import { userService } from "../services/user.service";
const AuthContext = createContext(void 0);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("spygraphix_token"));
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState("login");
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const storedToken = localStorage.getItem("spygraphix_token");
      if (storedToken) {
        try {
          const res = await authService.getMe();
          if (res.user) {
            setUser(res.user);
          }
        } catch (err) {
          console.warn("Session check failed or expired token");
        }
      }
      setLoading(false);
    };
    fetchCurrentUser();
  }, [token]);
  const login = async (credentials) => {
    const data = await authService.login(credentials);
    if (data.accessToken) {
      setToken(data.accessToken);
      setUser(data.user);
      setAuthModalOpen(false);
    }
    return data;
  };
  const register = async (userData) => {
    const data = await authService.register(userData);
    if (data.accessToken) {
      setToken(data.accessToken);
      setUser(data.user);
      setAuthModalOpen(false);
    }
    return data;
  };
  const logout = async () => {
    await authService.logout();
    setToken(null);
    setUser(null);
  };
  const updateProfile = async (data) => {
    const res = await userService.updateProfile(data);
    if (res.user) {
      setUser(res.user);
    }
    return res;
  };
  const changePassword = async (data) => {
    return await userService.changePassword(data);
  };
  const deleteAccount = async () => {
    await userService.deleteAccount();
    setToken(null);
    setUser(null);
    setAuthModalOpen(false);
  };
  const forgotPassword = async (email) => {
    return await authService.forgotPassword(email);
  };
  const resetPassword = async (data) => {
    return await authService.resetPassword(data);
  };
  const openAuthModal = (view = "login") => {
    setAuthModalView(view);
    setAuthModalOpen(true);
  };
  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };
  return <AuthContext.Provider
    value={{
      user,
      token,
      loading,
      login,
      register,
      logout,
      updateProfile,
      changePassword,
      deleteAccount,
      forgotPassword,
      resetPassword,
      authModalOpen,
      authModalView,
      openAuthModal,
      closeAuthModal
    }}
  >
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
