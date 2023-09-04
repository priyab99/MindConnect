import { Outlet } from "react-router-dom";


const Dashboard = () => {
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
                    
                        <li><a>Manage Users</a></li>
                        <li><a>Manage Therapists</a></li>
                        <li><a>Approve Appointments</a></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;