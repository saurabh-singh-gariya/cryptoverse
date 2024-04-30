/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import Header from "./component/Common/Header";
import Footer from "./component/Common/Footer";
import { useLocation } from "react-router-dom";
import { routes } from "./Constants/constants";

function App() {
  const location = useLocation();
  return (
    <div className="mx-auto h-screen flex flex-col font-poppins">
      <Header />
      <Outlet />
      {/* {location?.pathname !== routes.DEFAULT &&
        location?.pathname !== `/${routes.SAVED}` && */}
        {/* // !location?.pathname?.includes('/coin') && <Footer />} */}
    </div>
  );
}

export default App;
