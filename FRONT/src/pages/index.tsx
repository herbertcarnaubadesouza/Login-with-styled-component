import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeContainer } from "../components/HomeContainer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        Conteudo
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
