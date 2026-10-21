import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

const TITLES = {
  "/": "Home",
  "/education": "Education",
  "/employment": "Employment",
  "/projects": "Projects",
  "/achievements": "Achievements",
  "/references": "References",
  "/credits": "Credits",
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = TITLES[pathname] ?? "Home";
    document.title = `${page} | Anderson Rivera`;
  }, [pathname]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Nav />
        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </div>
  );
}
