import { useAuth } from "../../firebase/useAuth";
import { Navigate } from "react-router-dom";
import StarWarpField from "./animations/StarWarpField";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const user = useAuth();

  if (user === undefined) {
    return <StarWarpField />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
