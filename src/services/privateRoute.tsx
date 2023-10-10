import { Navigate, Outlet} from "react-router-dom";
import AuthStore from "../stores/AuthStore.ts"
import { observer } from "mobx-react-lite";

const PrivateRoute = () => {
  if (AuthStore.isAuthInProgress) {
    return <div>Checking auth...</div>;
  }
  if (localStorage.getItem("token") !== null) {
     return <Outlet/>
  } else {
    return <Navigate to="/login" />;
  }
};
  
export default observer(PrivateRoute);