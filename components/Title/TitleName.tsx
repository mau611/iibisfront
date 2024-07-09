import React, { useContext, useEffect, useReducer } from "react";
import "./styles.css";
import UserContext from "../data/Context/UserContext";

interface PropTypes {
  title: string;
}

const TitleName = () => {
  const { user, getUser } = useContext(UserContext);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="title">
      <h5>{`Bienvenido: ${user?.investigador?.nombres} ${user?.investigador?.apellidos}`}</h5>
    </div>
  );
};

export default TitleName;
