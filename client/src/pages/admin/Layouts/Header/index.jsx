import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="px-4 sm:ml-64 border-b-[1px] sticky top-0 bg-white z-10">
        {/* Hide on mobile, show on medium screens and up */}
        <div className="nav justify-between items-center py-2 hidden md:flex">
          <div className="left-side flex items-center">
            <Link to={"#"} className="text-gray-800 font-bold text-lg">
              Vishwakarma Premier League
            </Link>
          </div>
          <div className="right-side flex items-center space-x-4">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li> 
                  <Link to={'/dashboard/profile'} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li><Link to={"/"}>Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
