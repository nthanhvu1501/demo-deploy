import type { IUser } from "@/types"
import {create} from "zustand"

interface AuthState {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logout: () => void;
}

const getInitUser = () => {
  const store = localStorage.getItem("user");
  return store ? JSON.parse(store) : null
}

export const useAuthStore = create<AuthState>((set)=> ({
  user: getInitUser(),
  setUser: (user) => {
    if(user){
      localStorage.setItem("user", JSON.stringify(user))
    }else{
      localStorage.removeItem("user")
    }
    set({user})
  },
  logout: () => {
    localStorage.removeItem("user")
    set({user: null})
  }
}))