import type {LoginData} from "@/services/auth.service";
import {login as loginApi} from "@/services/auth.service";
import {useAuthStore} from "@/store/authStore";
import {useNavigate} from "react-router-dom";

export const useAuth = () => {
	const setUser = useAuthStore((state) => state.setUser);
	const navigate = useNavigate();
	const login = async (data: LoginData) => {
		try {
			const res = await loginApi(data);
			setUser(res.user);
			navigate("/admin");
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
      const errorMsg = error.response?.data?.message || "Đăng nhập thất bại"
      return errorMsg
    }
	};
  return {
    login
  }
};
