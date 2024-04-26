/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto h-screen flex flex-col font-poppins">
      <Header />

      <Outlet />
    </div>
  );
}

export default App;
