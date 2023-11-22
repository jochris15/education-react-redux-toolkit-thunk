import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "../layouts/BaseLayout";
import CounterPage from "../views/CounterPage";
import DataTablePage from "../views/DataTablePage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <CounterPage />,
      },
      {
        path: "/table",
        element: <DataTablePage />,
      },
    ],
  },
]);

export default router;
