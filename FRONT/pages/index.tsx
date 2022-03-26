import type { NextPage } from "next";
import { PricingCard } from "./components/PricingCard";

const Home: NextPage = () => {
  return <PricingCard price={99.99} />;
};

export default Home;
