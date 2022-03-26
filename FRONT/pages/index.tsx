import type { NextPage } from "next";
import { CourseCard } from "./components/CourseCard";

const Home: NextPage = () => {
  return <CourseCard imageURL="https://picsum.photos/1600/900"/>;
};

export default Home;
