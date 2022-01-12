import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./data";

const HomePage = () => {
  return <InfoSection {...homeObjOne} />;
};

export default HomePage;
