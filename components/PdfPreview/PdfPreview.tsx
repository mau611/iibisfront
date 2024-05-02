import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { endpoint } from "../Endpoint/Endpoint";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

const PdfPreview = ({ nombre }) => {
  const [ruta, setRuta] = useState("");

  useEffect(() => {
    getRuta();
  }, [nombre]);

  const getRuta = async () => {
    const response = await axios.get(`${endpoint}/iibis_file/${nombre}`);
    setRuta(response.data);
  };
  return (
    <div className="react-pdf__Page text-center">
      <Link href={ruta} target="_blank">
        <FaFilePdf />
        {nombre}
      </Link>
    </div>
  );
};

export default PdfPreview;
