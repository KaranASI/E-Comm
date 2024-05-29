import productArray from "./Data";
import { ProductCard } from "./PrdCa";
import { useState } from "react";

const Home = () => {
  let data = productArray[0];
  return <div> {ProductCard(data)} </div>;
};

export default Home;
