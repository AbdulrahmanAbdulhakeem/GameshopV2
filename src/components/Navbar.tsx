import React, { useState } from "react";
import { FaGamepad } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search,setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${search}`)
  }

  const handleInput = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div className="flex justify-between items-center bg-slate-900 p-5">
    <Link to="/" >
      <div className="text-slate-100 m-2 inline-flex items-center">
        <FaGamepad />
        <h1 className="ml-2">GameShop</h1>
      </div>
      </Link>
      <div className="text-slate-100 items-center mx-5 inline-flex flex-grow">
        <form onSubmit={handleSubmit} className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search game"
            value={search}
            onChange={handleInput}
            className="rounded bg-slate-800 mr-2 focus:outline-none flex-grow p-3 border-slate-200"
          />
          <button type="submit">
            <CiSearch />
          </button>
        </form>
      </div>
      <div>
        <NavLink to='/store' className="text-slate-100 inline-flex items-center">
          Go to Store
          <FaArrowRight className="mx-1" />
        </NavLink>
      </div>
    </div>
    
  );
};

export default Navbar;
