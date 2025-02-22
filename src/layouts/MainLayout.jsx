import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <header className="bg-blue-300">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-8rem)]">
        <Outlet />
      </main>
      <footer className="bg-blue-300">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
