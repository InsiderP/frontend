import api from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLogin = () => {
  const router = useRouter();
  const uselogin = useMutation({
    mutationFn: async (obj) => {
      const res = await api.post("tokens/login", obj,{//true route
        withCredentials : true
      });
      console.log(res)
      return res?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message)
      router.push("/dashboard"); 
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return uselogin;
};

export default useLogin;
