import { Link } from "react-router-dom";
import { routes } from "../Constants/routerConstants";

const Home = () => {
  return (
    <div className="flex w-[90%] mx-auto h-full text-white flex-col items-center justify-center">
      <div className="font-extrabold text-5xl sm:text-7xl mb-7 text-center">
        Track Crypto
      </div>
      <div className="font-extrabold text-5xl sm:text-7xl text-[#FFD700] text-center mb-7">
        Real Time.
      </div>
      <div className="text-center text-xl">
        We offer you to track your favourite crypto using a public api by
        <span className="text-2xl font-bold cursor-pointer ml-2 underline">
          <a href="https://www.coingecko.com/" target="_blank">
            CoinGeko
          </a>
        </span>
      </div>
      <Link to={routes.CRYPTO}>
        <button className="text-center text-2xl mt-7 text-black bg-[#FFD700] px-5 py-4 rounded-xl font-semibold ">
          Click Here!
        </button>
      </Link>
    </div>
  );
};

export default Home;
