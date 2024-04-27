/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import Header from "./component/Common/Header";
import Footer from "./component/Common/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="mx-auto h-screen flex flex-col font-poppins pb-9">
      <Header />
      <Outlet />
      {location?.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
