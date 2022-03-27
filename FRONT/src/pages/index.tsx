import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeContainer } from "../components/HomeContainer";
import { PageContainer } from "../components/PageContainer";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header />
      <HomeContainer>
        Conteudo
      </HomeContainer>
      <Footer />
    </PageContainer>
  );
};

export default Home;
