import React, { useEffect, useState } from "react";
import InvNav from "./InvNav";
import BodyContainer from "./BodyContainer";
import UserState from "@/components/data/State/UserState";

import axiosInstance from "@/Api/AxiosInstance";
import { useRouter } from "next/navigation";

const InvLayout = (props) => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const response = await axiosInstance.get("api/user");
      setUser(response.data);
      if (response.data.rol === "admin") {
        router.push("/admin");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UserState>
      <InvNav />
      <BodyContainer>{props.children}</BodyContainer>
    </UserState>
  );
};

export default InvLayout;
