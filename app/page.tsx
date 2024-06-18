"use client";
import axiosInstance from "@/Api/AxiosInstance";
import Login from "@/components/Sesion/Login";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const response = await axiosInstance.get("api/user");
      setUser(response.data);
      if (response.data) {
        if (response.data.rol === "admin") {
          router.push("/admin");
        } else if (response.data.rol === "investigador") {
          router.push("/investigador");
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Login />
    </div>
  );
};
export default Home;
