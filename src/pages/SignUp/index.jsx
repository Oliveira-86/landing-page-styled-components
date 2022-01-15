import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjOThree } from "./data";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />;
      <InfoSection {...homeObjOThree} />;
    </>
  );
};

export default HomePage;
