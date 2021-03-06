import React from "react";
import { InfoSection } from "../../components";
import Pricing from "../../components/Pricing";
import { homeObjOFour, homeObjOne, homeObjOThree, homeObjTwo } from "./data";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />;
      <InfoSection {...homeObjTwo} />;
      <InfoSection {...homeObjOThree} />;
      <Pricing />
      <InfoSection {...homeObjOFour} />;
    </>
  );
};

export default HomePage;
