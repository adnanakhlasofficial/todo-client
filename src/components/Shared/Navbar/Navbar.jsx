import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
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
            <Link
              className='px-6 py-2 rounded-lg font-semibold bg-blue-400'
              to='/singin'
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
