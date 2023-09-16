import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {

    //TODo
    const isAdmin=true;
    const isTherapist=true;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet/>
                
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    
                    {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/managetherapist"> Manage Therapists </Link>
                </li>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/approvesessions">Approve Sessions</Link>
                </li>
              </>
            ): isTherapist ? (
                <>
                  <li>
                      Add Prfile
                  </li>
                  <li>
                    My Session
                  </li>
                </>
              )  : (
              <>
                <li>
                  My Session
                </li>
                <li>
                  My schedule
                </li>
                <li>
                  Pending work
                </li>
              </>
            )}


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;