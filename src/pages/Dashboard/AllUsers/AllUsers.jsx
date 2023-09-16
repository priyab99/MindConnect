import { useQuery } from "@tanstack/react-query";
import {FaUserShield} from 'react-icons/fa'



const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                alert('Admin created');
            }
        })
    }

    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/therapist${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                alert('Therapist created');
            }
        })
    }
    return (
        <div>
            {users.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user,index)=> <tr key={user._id}>
                                <th>{index +1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role==='admin' ? 'admin' : <FaUserShield></FaUserShield>}</td>
                                <td><button className="btn btn-primary"        onClick={() => handleMakeAdmin(user)}
                                        disabled={user.role === 'admin'}>Make Admin</button></td>
                                <td><button className="btn btn-primary " onClick={() => handleMakeInstructor(user)}
                                        disabled={user.role === 'Therapist'}>Make Therapist</button></td>
                            </tr>)
                        }
                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;