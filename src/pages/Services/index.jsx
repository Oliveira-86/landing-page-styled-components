import React from "react";
import { InfoSection } from "../../components";
import Pricing from "../../components/Pricing";
import { homeObjOne, homeObjOThree} from "./data";

const HomePage = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjOThree} />
    </>
  );
};

export default HomePage;
