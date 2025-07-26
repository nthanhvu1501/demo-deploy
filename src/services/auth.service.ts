import axiosInstance from "@/config/axiosConfig";
import type {IUser} from "@/types";

export interface LoginData {
	email: string;
	password: string;
}

interface RegisterData{
  username: string;
  email: string;
  fullname: string;
  password: string;
}

interface LoginResponse {
  user: IUser;
  message: string;
}


export async function login(data: LoginData): Promise<LoginResponse> {
	const res = await axiosInstance.post("/login", data);
	return res.data;
}

export async function register(data: RegisterData): Promise<{message: string}> {
	const res = await axiosInstance.post("/register", data);
	return res.data;
}