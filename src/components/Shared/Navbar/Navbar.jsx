import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const { googleLogin, user, logoutUser } = useContext(AuthContext);

  async function googleSingIn() {
    const { user } = await googleLogin();
    const userInfo = {
      uid: user?.uid,
      email: user?.email,
      name: user?.displayName,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/user`,
        userInfo
      );
      if (data?.insertedId) {
        toast.success("Welcome to Planify");
      } else {
        toast.success("Welcome back to Planify");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  }

  async function logout() {
    try {
      await logoutUser();
      toast.success("Succesfully Logout");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  }

  return (
    <nav className="container mx-auto px-4 flex justify-between items-center py-4">
      <div>
        <h1 className="text-xl font-semibold">
          <Link to="/">Planify</Link>
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-8">
          <li>
            <NavLink className="font-semibold" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="font-semibold" to="/">
              Contact
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink className="font-semibold" to="/add-task">
                  Add Task
                </NavLink>
              </li>
              <li>
                <NavLink className="font-semibold" to="/task-board">
                  Task Board
                </NavLink>
              </li>
            </>
          )}
          <li>
            {user ? (
              <button
                onClick={logout}
                className="px-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer font-semibold"
              >
                Sing Out
              </button>
            ) : (
              <button
                className="px-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer font-semibold"
                onClick={googleSingIn}
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
