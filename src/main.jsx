import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Saved from "./pages/Saved.jsx";
import Trending from "./pages/Trending.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { routes } from "./Constants/routerConstants.js";
import Home from "./pages/Home.jsx";

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
        element: <Dashboard />,
      },
      {
        path: routes.TRENDING,
        element: <Trending />,
      },
      {
        path: routes.SAVED,
        element: <Saved />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={rootRouter}>
      <App />
    </RouterProvider>
  </Provider>
);
