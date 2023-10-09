import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from '../ProvideContext/Provider';

const Navbar = () => {
  const {logout,user} =  useContext()

    return (
        <div>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className='w-28' src="http://corano.mallthemes.com/wp-content/uploads/2019/07/logo_corano.png" alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  
      <li><Link to='/allItems'>All Jewelry</Link></li>
      <li><Link to='/addItems'>Add Jewelry</Link></li>
      <li><Link to={`/myItems/${user?.email}`}>My Jewelry</Link></li>

  
      <li><Link to='/dashboard'>DashBoard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
{
  user?   <div className="dropdown flex justify-center items-center dropdown-end">
    <h3>hii {user.displayName}!</h3>
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img src={user.photoURL} />
    </div>
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-yellow-500 z-20 rounded-box w-52">
    <li>
      <a className="justify-between">
        Profile
        <span className="badge">New</span>
      </a>
    </li>
    <li><a>Settings</a></li>
    <li onClick={logout}><a>Logout</a></li>
  </ul>
</div>: <Link to='/login'><button className='btn btn-accent'>Sign In</button></Link>
}
  </div>
</div>
        </div>
    );
};

export default Navbar;