// // Define the context type
// interface AuthContextType {
//   isLoggedIn: boolean;
//   loginUser(user: User): Promise<void | null>; // Adjust the return type as needed
//   logoutUser(): void;
// }
// // const AuthContext = createContext<AuthContextType>({
// //   const [isLoggedIn, setIsLoggedIn] = useState(false),
// //
// // }) ;

// // Define the AuthProvider component
// function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // Login function
//   async function LoginUser(user: User) {
//     console.log("Hello login");
//     const resp = axiosHandler.post("/user.login", JSON.stringify(user));

//     if (token !== null) {
//       localStorage.setItem("token", token);
//       setIsLoggedIn(true);
//     }
//   }

//   // Logout functionuser.
//   function LogOutUser() {
//     localStorage.clear();
//     setIsLoggedIn(false);
//   }

//   const value = useMemo(
//     () => ({
//       isLoggedIn,
//       LoginUser,
//       LogOutUser,
//     }),
//     [isLoggedIn]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// // Custom hook to use the auth context
// function useAuth() {
//   return useContext(AuthContext);
// }

// export { AuthProvider, useAuth };

export const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  // const authContxt: AuthContextType = useAuth();
  const isLoggedIn = true;
  console.log(element);
  console.log("Auth Provider 3", localStorage.getItem("token"));
  return isLoggedIn ? element : element;
};
