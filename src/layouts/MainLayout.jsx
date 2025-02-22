import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="bg-blue-300">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-14.5rem)]">
        <Outlet />
      </main>
      <footer className="min-h-40 bg-blue-300">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
