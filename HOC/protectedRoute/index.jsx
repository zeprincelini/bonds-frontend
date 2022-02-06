import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ProtectedRoute = (Component, path) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const { user } = useSelector((state) => state.loginReducer);
      //const isLoggedIn = localStorage.getItem("user");
      if (user !== null) {
        router.replace(path);

        return null;
      } else {
        return <Component {...props} />;
      }
    }
  };
};

export default ProtectedRoute;
