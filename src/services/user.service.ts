import axiosInstance from "@/config/axiosConfig";
import type { IUser } from "@/types";

export const updateUser = async (id: string, formData: FormData): Promise<IUser> => {
  const res = await axiosInstance.patch(`/users/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return res.data
}