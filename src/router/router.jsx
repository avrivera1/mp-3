import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Education from "../pages/Education.jsx";
import Employment from "../pages/Employment.jsx";
import Projects from "../pages/Projects.jsx";
import Achievements from "../pages/Achievements.jsx";
import References from "../pages/References.jsx";
import Credits from "../pages/Credits.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "education", element: <Education /> },
      { path: "employment", element: <Employment /> },
      { path: "projects", element: <Projects /> },
      { path: "achievements", element: <Achievements /> },
      { path: "references", element: <References /> },
      { path: "credits", element: <Credits /> },
    ],
  },
]);

export default router;
