import React from "react";
import  InfoSection  from "../../components/InfoSection";
import { homeObjOne } from "./data";

const HomePage = () => {
  return <InfoSection {...homeObjOne} />;
};

export default HomePage;
