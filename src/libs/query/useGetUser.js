

import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";

const useGetUser = ({ page = 1, limit = 10 }) => {
  console.log("page", page);
  const query = useQuery({
    queryKey: ["/AllUser", page, limit],
    queryFn: async () => {
      const response = await api.get(
        `users?page=${page}&limit=${limit}`
      );
      //   console.log("aa");
      console.log("response", response.data);
      return response?.data;
    },
  });
  return query;
};
export default useGetUser;
