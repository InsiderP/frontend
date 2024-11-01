import api from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";


import toast from "react-hot-toast";

const useCreateChef = () => {
  
  const query = useQueryClient();
  
  const mutate = useMutation({
    mutationFn: async (data) => {
      console.log('Data being sent:', data); // Log data before sending
      try {
        const response = await api.post("/users/signup", data);
        console.log('API response:', response); // Log API response
        return response?.data;
      } catch (error) {
        console.error('API request error:', error); // Log full error
        throw error; // Re-throw error to handle in onError
      }
    },
    onSuccess: (data) => {
      console.log('Success data:', data); // Log data on success
      toast.success(data?.message || 'Success!'); // Provide default message if `data.message` is not available
      query.invalidateQueries("/AllChef");
      
    },
    onError: (error) => {
      console.error('Error details:', error.response?.data || error.message); // Log error details
      toast.error(error.response?.data?.message || 'An error occurred'); // Show detailed error message
    },
  });

  return mutate;
};

export default useCreateChef;
