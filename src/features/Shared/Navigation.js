import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxDropdownMenu } from "react-icons/rx";
import logo from '../../assets/logo/mainlogo.png'
import { AuthContext } from '../../Providers/AuthProviders';

const Navigation = () => {
  
  const {user,logOut}=useContext(AuthContext);  {/* get user information which user are login*/}
  console.log(user)
  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
  
    return (
        <div  className="navbar  fixed z-10   max-w-screen-2xl mx-auto  bg-yellow-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" text-3xl text-black lg:hidden"> {/* button for mobile screen */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
               <RxDropdownMenu></RxDropdownMenu>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content  p-2 text-black shadow font-bold   bg-white z-10 bg-opacity-80 rounded-box w-52"> {/* mobile screen navbar routes */}
            <li><NavLink className='mb-2  font-bold' to="/">Home</NavLink> </li>
            <li><NavLink className=' mb-2 font-bold' to="/contact">contact</NavLink> </li>
           
            <div className=" navbar-end">
            {user&& <li><NavLink className=' font-bold' to="/dashboard">Dashboard</NavLink> </li>}
            
        </div>
              
            
            </ul>
          </div>
           
          <Link to="/"> <img
                        className=" h-12 w-30"
                        src={logo}
                        alt="Bookshop logo"
                      /></Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2"> {/* active navbar routes */}
            <li><NavLink className='text-black  font-bold' to="/">Home</NavLink> </li>
            <li><NavLink className='text-black  font-bold' to="/contact">Contact</NavLink> </li>
           
           {user&& <li><NavLink className='text-black font-bold' to="/dashboard">Dashboard</NavLink> </li>}

           {/* {user ? <button onClick={handleLogOut} className="btn btn-sm btn-outline bg-gray-400 ">Log Out</button>:<Link to="/login" className="btn btn-sm  h-[30px]  class-card-bg hover:bg-lime-400 md:mx-4">Login</Link> } */}
         
          </ul>
        </div>
        <div>     
        </div>
        <div className=" navbar-end">
        <label className="swap swap-rotate">
  
  
</label>
        <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
      {user?<img className='rounded-full w-[50px] m-0 p-0' src={user.photoURL}  />:<img className='rounded-full w-[50px] m-0 p-0' src='https://i.ibb.co/Yt9hMws/signup-logo.png'  />}  
      </div>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-transparent text-black rounded-box w-52">
      <li>
        <a className="justify-between font-extrabold">
          Profile
        </a>
        <a className="justify-between font-extrabold">
        {user ? <button onClick={handleLogOut} >Log Out</button>:<Link to="/login" >Login</Link> }
        </a>
      </li>
      {/* {user ? <button onClick={handleLogOut} className="btn  ">Log Out</button>:<Link to="/login" className="btn ">Login</Link> } */}
    </ul>
    
  </div>
        </div>
        
      </div>
      
    );
};

export default Navigation;