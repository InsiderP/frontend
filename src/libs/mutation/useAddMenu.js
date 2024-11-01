import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/pages/api/api";
import toast from "react-hot-toast";

const useAddMenu = () => {
  const query = useQueryClient();
  const mutate = useMutation({
    mutationFn: async (data) => {
      const response = await api.post("menu", data);
      return response?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      query.invalidateQueries("/AllMenu");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return mutate;
};

export default useAddMenu;
