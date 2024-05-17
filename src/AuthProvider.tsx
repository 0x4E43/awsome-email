import LoginPage from "./pages/loginPaget";

const useAuth = () => {
  const isAuthenticated: boolean = !!localStorage.getItem("token");
  return isAuthenticated;
};

export const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated: boolean = useAuth();
  return isAuthenticated ? element : <LoginPage />;
};
