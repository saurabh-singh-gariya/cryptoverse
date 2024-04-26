/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { fetchCryptoCoins } from "./store/slice/cryptoSlice";
import { useDispatch } from "react-redux";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCryptoCoins());
  }, []);

  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
