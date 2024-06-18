import { useReducer } from "react";
import UserReducer from "@/components/data/Reducer/UserReducer";
import axiosInstance from "../../../Api/AxiosInstance";
import UserContext from "../Context/UserContext";

const UserState = (props) => {
  const initialState = {
    user: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUser = async () => {
    try {
      const response = await axiosInstance.get("api/user");
      dispatch({
        type: "GET_USER",
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      window.location.href = "/";
    }
  };
  const cerrarSesion = async () => {
    try {
      await axiosInstance.post(`/logout`);
      dispatch({
        type: "SET_USER",
        payload: null,
      });
      window.location.href = "/";
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const isInvestigador = () => {
    return state.user.rol === "investigador";
  };
  const isAdmin = () => {
    return state.user.rol === "admin";
  };
  const userId = () => {
    return state.user?.id;
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        userId,
        getUser,
        isInvestigador,
        isAdmin,
        cerrarSesion,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
