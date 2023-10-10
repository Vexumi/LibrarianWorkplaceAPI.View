import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./services/privateRoute.js";
 
import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage.tsx"

const App = () => {
  
//   useEffect(() => {
//      AuthStore.checkAuth();
//   }, []);
 
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/secret" element={<PrivateRoute  />}>
            </Route>
            
            <Route path="/main" element={<MainPage/>} />

            <Route path="*" element={<div>404... not found </div>} />
        </Routes>
    </BrowserRouter>
   );
};

export default App;