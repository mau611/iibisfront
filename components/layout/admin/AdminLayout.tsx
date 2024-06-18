import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import BodyContainer from "./BodyContainer";
import { useRouter } from "next/navigation";
import axiosInstance from "@/Api/AxiosInstance";
import UserState from "@/components/data/State/UserState";

const AdminLayout = (props) => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const response = await axiosInstance.get("api/user");
      setUser(response.data);
      if (response.data.rol !== "admin") {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserState>
      <AdminNav />
      <BodyContainer>{props.children}</BodyContainer>
    </UserState>
  );
};

export default AdminLayout;
