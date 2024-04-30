import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import appStore from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Crypto from "./pages/Crypto";
import Saved from "./pages/Saved";
import Trending from "./pages/Trending";
import ErrorPage from "./pages/ErrorPage";
import { routes } from "./Constants/constants.js";
import Home from "./pages/Home";
import SingleCoin from "./pages/SingleCoin";

const rootRouter = createBrowserRouter([
  {
    path: routes.DEFAULT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.CRYPTO,
        element: <Crypto />,
      },
      {
        path: routes.TRENDING,
        element: <Trending />,
      },
      {
        path: routes.SAVED,
        element: <Saved />,
      },
      {
        path: routes.SINGLE_COIN,
        element: <SingleCoin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <IntlProvider locale="en" defaultLocale="en">
    <Provider store={appStore}>
      <RouterProvider router={rootRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </IntlProvider>
);
