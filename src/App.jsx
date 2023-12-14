import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//Page imports
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import BlogFeedGeneral from "./pages/BlogFeedGeneral/BlogFeedGeneral";
import EditPost from "./pages/EditPost/EditPost";
import { UsuarioProvider } from "./context/UsuarioContext";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost/CreatePost";

//Lib imports

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "blog",
    element: <Dashboard />
  },
  {
    path: "blogMaluCosta",
    element: <BlogFeedGeneral />
  },
  {
    path: "editPost",
    element: <EditPost />
  },
  {
    path: "createPost",
    element: <CreatePost />
  },
]);

function App() {

  return (
    <UsuarioProvider>
  <div className="App">
    <RouterProvider router={router} />
  </div>
    </UsuarioProvider>
  )
}

export default App