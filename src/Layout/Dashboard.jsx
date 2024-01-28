import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTherapist from "../hooks/useTherapist";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { FcApprove } from "react-icons/fc";
import { CiViewTable } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";

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
                
                  <Link to="/dashboard/allusers"><RiUserSettingsFill/>Manage Users</Link>
                </li>
                <li>
               
                  <Link to="/dashboard/approvesessions"> <FcApprove />Appove Therapist</Link>
                </li>
              </>
            ): isTherapist ? (
                <>
                  <li>
                 
                     <Link to="/dashboard/myappointment"> <FaRegMessage />Appointment</Link>
                  </li>
                  <li>
                 

                    <Link to="/dashboard/patientsrecords"> <CiViewTable />Patient Records</Link>
          
                  </li>
                </>
              )  : (
              <>
                <li>
               
                  <Link to="/dashboard/mysession"> <FaRegMessage />My Session</Link> 
                </li>
                <li>
               
                  <Link to="/dashboard/myprogress"> <GiProgression />My Progress</Link>
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