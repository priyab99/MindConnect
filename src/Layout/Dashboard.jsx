import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTherapist from "../hooks/useTherapist";


const Dashboard = () => {

   const [isAdmin]=useAdmin();
   const [isTherapist]=useTherapist();
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
                  <Link to="/dashboard/allusers">Manage Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/approvesessions">Approve Sessions</Link>
                </li>
              </>
            ): isTherapist ? (
                <>
                  <li>
                     <Link to="/dashboard/myappointment">Appointment</Link>
                  </li>
                  <li>
                    Student Progress
                  </li>
                </>
              )  : (
              <>
                <li>
                  <Link to="/dashboard/mysession">My Session</Link>
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