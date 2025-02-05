import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "packages/:name",
        element: <DetailPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
