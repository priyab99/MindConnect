import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }



    return (
        <div>
            <div className="navbar fixed z-20 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>

                            <li><a>About Us</a></li>
                            {user && <li><Link to='/selectsymptoms'>Select Symptoms</Link></li>

                            }
                            {user && (
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            )}


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">MindConnect</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>

                        <li><a>About Us</a></li>
                        {user && <li><Link to='/selectsymptoms'>Select Symptoms</Link></li>}
                        {user && (
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            )}
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <> <button onClick={handleLogOut} className="btn btn-outline text-white">Logout</button></> : <><button className="btn btn-outline text-white"><Link to='/login'>Login</Link></button></>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;