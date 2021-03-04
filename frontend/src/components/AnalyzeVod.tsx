import React from "react";
import { useParams } from "react-router-dom";

const AnalyzeVod = () => {
  // @ts-ignore
  const { vodID } = useParams();
  return <div>{vodID}</div>;
};

export default AnalyzeVod;
