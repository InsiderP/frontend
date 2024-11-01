"use client"

import { useQuery } from "@tanstack/react-query";



const useMe = () => {
  const userDetails = useQuery({
    queryKey: ["user_details"],
    queryFn: async () => {
      const res = await api.get("users/useme");//role
      // console.log(res)
      
      return res?.data?.data;
    },
    throwOnError : (error) => {
      console.log("Error ", error);
    },
    refetchOnWindowFocus: false,
  });
  
  return userDetails;
};

export default useMe;
