import { NavLink, Outlet, Navigate } from "react-router-dom";
import logo from "../../assets/logo/mainlogo.png";

function UserPannel() {
  const isAdmin = false; // Change this to your actual logic

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start p-6">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn mb-4 mt-2 bg-lime-500 drawer-button lg:hidden">
            Open
          </label>
          {isAdmin ? <Navigate to="/pannelPage/adminprofile" /> : <Navigate to="/pannelPage/userprofile" />}
          <Outlet /> {/* This will render the matched child route components */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 h-full bg-white text-base-content shadow-lg">
            {/* Sidebar content here */}
            <div className="text-center mb-4">
              <img className='w-full h-40 mx-auto rounded-lg shadow-md' src={logo} alt="PK BOOKS CORNER" />
            </div>
            <div className="divider"></div>
            {isAdmin ? (
              <>
                <li className='mb-6'>
                  <NavLink to="/pannelPage/adminprofile" className="text-lime-500 text-2xl  hover:text-lime-700">
                    Admin Profile
                  </NavLink>
                </li>
                {/* Repeat for other admin links if needed */}
              </>
            ) : (
              <>
                <li className='mb-6'>
                  <NavLink to="/pannelPage/userprofile" className={({ isActive }) => 
                isActive ? "text-black font-semibold bg-cyan-200" : "text-black   hover:text-gray-700"
              }>
                    User Profile
                  </NavLink>
                </li>
                {/* Repeat for other user links if needed */}
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/" className='text-black font-semibold hover:text-gray-700'>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserPannel;
