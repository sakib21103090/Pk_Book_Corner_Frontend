import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import AuthProviders, { AuthContext } from "./Providers/AuthProviders";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./features/Cart/CartSlice";

function AppContent() {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.uid));
    }
  }, [dispatch, user]);

  return (
    <div className="App max-w-screen-2xl mx-auto ">
      <RouterProvider router={router} />
    </div>
  );
}

function App() {
  return (
    <AuthProviders>
      <AppContent />
    </AuthProviders>
  );
}

export default App;