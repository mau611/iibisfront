import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { endpoint } from "../Endpoint/Endpoint";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

const PdfPreview = ({ nombre, ruta }) => {
  const [route, setRoute] = useState("");

  useEffect(() => {
    getRuta();
  }, [nombre]);

  const getRuta = async () => {
    const response = await axios.get(`${endpoint}/${ruta}/${nombre}`);
    setRoute(response.data);
  };
  return (
    <div className="react-pdf__Page text-center">
      <Link href={route} target="_blank">
        <FaFilePdf />
        {nombre}
      </Link>
    </div>
  );
};

export default PdfPreview;
