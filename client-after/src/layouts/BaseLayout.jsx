import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const BaseLayout = () => {
  return (
    <>
      <header className="px-4 pt-4 pb-2">
        <NavBar />
      </header>

      <main className="px-4 pt-2 pb-4">
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
