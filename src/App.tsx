import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";


const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
  ]},
]);
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
