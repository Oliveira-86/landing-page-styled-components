import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo } from "./data";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />;
      <InfoSection {...homeObjTwo} />;
    </>
  );
};

export default HomePage;
