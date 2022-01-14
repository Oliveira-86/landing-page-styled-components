import React from "react";
import { InfoSection } from "../../components";
import { homeObjOFour, homeObjOne, homeObjOThree, homeObjTwo } from "./data";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />;
      <InfoSection {...homeObjTwo} />;
      <InfoSection {...homeObjOThree} />;
      <InfoSection {...homeObjOFour} />;
    </>
  );
};

export default HomePage;
