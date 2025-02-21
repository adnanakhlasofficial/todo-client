import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const { googleLogin } = useContext(AuthContext);

  async function googleSingIn() {
    const { user } = await googleLogin();
    console.log(user);
  }

  return (
    <nav className='container mx-auto px-4 flex justify-between items-center py-4'>
      <div>
        <h1 className='text-xl font-semibold'>
          <Link to='/'>Planify</Link>
        </h1>
      </div>
      <div>
        <ul className='flex items-center gap-8'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/'>Contact</NavLink>
          </li>
          <li>
            <button
              className='px-6 py-2 rounded-lg font-semibold bg-blue-400 hover:bg-blue-500 transition duration-300 hover:cursor-pointer '
              onClick={googleSingIn}
            >
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
