import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";

const useTherapist=()=>{
    const {user}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data : isTherapist,isLoading: isAdminLoading}=useQuery({
        queryKey: ['isTherapist',user?.email],
        queryFn: async()=>{
            try {
                const res = await axiosSecure.get(`/users/therapist/${user?.email}`);
                console.log('is therapist response', res);
                return res.data.therapist;
              } catch (error) {
                console.error('Error fetching therapist data:', error);
                throw error; // Rethrow the error to be handled by React Query
              }
        }
    })
    return[isTherapist,isAdminLoading]

}
export default useTherapist;